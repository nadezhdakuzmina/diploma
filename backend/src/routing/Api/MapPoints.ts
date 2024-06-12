import { Router } from 'express';

import { MapPoints } from '@views';

export const MapPointsPath = '/points';
export const MapPointsRouter = Router();

MapPointsRouter.post('/comment', MapPoints.postComment);
MapPointsRouter.post('/point', MapPoints.postPoint);
MapPointsRouter.get('/point', MapPoints.getPoint);
MapPointsRouter.get('/', MapPoints.getPoints);
