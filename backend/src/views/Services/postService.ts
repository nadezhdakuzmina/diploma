import { Service } from '@entities/Service';
import { Tag } from '@entities/Tag';
import { City } from '@entities/City';
import { Country } from '@entities/Country';

import { requireAuth } from '@utils/requireAuth';

import type { Request, Response } from '@types';

type BodyParams = {
  citySlug?: string;
  countrySlug?: string;
  name: string;
  description: string;
  tags: string[];
  logoId: number;
};

export const postService = requireAuth(async (req: Request, res: Response) => {
  const {
    name,
    description,
    logoId,
    tags: tagsStr,
    citySlug,
    countrySlug,
  } = req.body as BodyParams;
  const { authUser: user } = req;

  if (!name || !description || !logoId || !tagsStr) {
    return res.status(400).json({
      error: 'name, description, logoId and tags are required',
    });
  }

  if (!Array.isArray(tagsStr)) {
    return res.status(400).json({
      error: 'tags are invalid',
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

    const city = await City.findOneBy({
      slug: citySlug,
    });

    const country = await Country.findOneBy({
      slug: countrySlug,
    });

    const service = Service.create({
      name,
      description,
      user,
      tags,
      logoId,
      city,
      country,
    });

    await service.save();

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
