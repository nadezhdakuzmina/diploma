import express, { Router } from 'express';
import multer from 'multer';
import md5 from 'md5';

import { Image } from '@entities/Image';

import { STATIC_PATH } from '@constants';

import type { Request, Response } from '@types';

export const StaticPath = '/static';
export const StaticRouter = Router();

const storage = multer.diskStorage({
  destination: (_: Request, __, callback) => {
    callback(null, STATIC_PATH);
  },
  filename: (_: Request, file, callback) => {
    const filename = md5(`${Date.now()}:${file.originalname}:${Math.random()}`);
    callback(null, filename);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB
  },
  fileFilter: (req: Request, file, callback) => {
    if (!req.authUser) {
      return;
    }

    // Допустимые MIME-типы изображений
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];

    if (allowedTypes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
});

StaticRouter.post(
  '/upload',
  upload.single('image'),
  async (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).json({
        error: 'unsupported mime type',
      });
    }

    try {
      const image = Image.create({
        src: `${req.staticBaseUrl}/file/${req.file.filename}`,
      });

      await image.save();

      res.json({
        success: true,
        image: image,
      });
    } catch (error) {
      res.status(500).json({
        error:
          error instanceof Error
            ? `${error.message} ${error.stack}`
            : JSON.stringify(error),
      });
    }
  }
);

StaticRouter.use('/file', express.static(STATIC_PATH));
