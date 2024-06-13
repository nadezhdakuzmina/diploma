import { MapPoint, PointCategory } from '@entities/MapPoint';
import { Tag } from '@entities/Tag';
import { City } from '@entities/City';

import { requireAuth } from '@utils/requireAuth';

import type { Request, Response } from '@types';
import { Image } from '@entities/Image';

type BodyParams = {
  name: string;
  description: string;
  images: number[];
  type: PointCategory;
  citySlug: string;
  tags: string[];
  lng: number;
  lat: number;
};

export const postPoint = requireAuth(async (req: Request, res: Response) => {
  const {
    name,
    description,
    type,
    images,
    tags: tagsStr,
    lng,
    lat,
    citySlug,
  } = req.body as BodyParams;
  const { authUser: user } = req;

  if (!name || !description || !type || !tagsStr || !lng || !lat || !images) {
    return res.status(400).json({
      error: 'name, description, type, tagsStr, lng and lat are required',
    });
  }

  if (!Array.isArray(tagsStr)) {
    return res.status(400).json({
      error: 'tags are invalid',
    });
  }

  if (!Array.isArray(images)) {
    return res.status(400).json({
      error: 'images are invalid',
    });
  }

  if (!Object.values(PointCategory).includes(type)) {
    return res.json({
      error: 'invalid type',
    });
  }

  try {
    const tags =
      tagsStr.length > 0
        ? await Tag.find({
            where: tagsStr.map((tag) => ({
              name: tag,
            })),
          })
        : [];

    const existedTagsSet = new Set(tags.map(({ name }) => name));

    const tagsToCreate = tagsStr.filter((tag) => !existedTagsSet.has(tag));

    const tagsToSave = tagsToCreate.map((tag) => {
      const entity = Tag.create({ name: tag });
      tags.push(entity);

      return entity;
    });

    await Promise.all(tagsToSave.map((tag) => tag.save()));

    const imagesObjects = await Image.findByIds(images);

    const city = await City.findOneBy({
      slug: citySlug,
    });

    const mapPoint = MapPoint.create({
      name,
      description,
      type,
      lng,
      lat,
      city,
      user,
      tags,
      images: imagesObjects,
    });

    await mapPoint.save();

    res.json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error
          ? `${error.message} ${error.stack}`
          : JSON.stringify(error),
    });
  }
});
