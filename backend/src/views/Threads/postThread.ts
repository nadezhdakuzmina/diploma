import { Thread } from '@entities/Thread';
import { Tag } from '@entities/Tag';
import { City } from '@entities/City';
import { Country } from '@entities/Country';

import { requireAuth } from '@utils/requireAuth';

import type { Request, Response } from '@types';

type BodyParams = {
  citySlug?: string;
  countrySlug?: string;
  tags: string[];
  text: string;
};

export const postThread = requireAuth(async (req: Request, res: Response) => {
  const { text, tags: tagsStr, citySlug, countrySlug } = req.body as BodyParams;
  const { authUser: user } = req;

  if (!text || !tagsStr) {
    return res.status(400).json({
      error: 'text and tags are required',
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

    const thread = Thread.create({
      text,
      user,
      tags,
      city,
      country,
    });

    thread.save();

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
