import { Points } from '@api';

import { setCurrentPointAction, setCurrentPointCategoryAction, setPointsAction, updatePointAction } from '@data/actions/points';
import { selectCurrentCity } from '@data/selectors/cities';
import { selectCurrentPointCategory, selectPoints } from '@data/selectors/points';

import type { State } from '@data/types';
import type { ThunkActionDispatch } from 'redux-thunk';
import type { PointCategory } from '@types';

export const loadPointsThunk = (type: PointCategory, force = false) => {
  return async (dispatch: ThunkActionDispatch<any>, getState: () => State) => {
    const state = getState();

    const currentCity = selectCurrentCity(state);
    const currentCategory = selectCurrentPointCategory(state);
    const points = selectPoints(state);

    if (!force && points && currentCategory === type) {
      return;
    }

    Points.getPoints(currentCity.slug, type).then((points) => {
      dispatch(setCurrentPointCategoryAction(type));
      dispatch(setPointsAction(points));
    });
  };
};

export const loadCurrentPointThunk = (id: number, force = false) => {
  return async (dispatch: ThunkActionDispatch<any>, getState: () => State) => {
    const { points } = getState();

    if (!force && points.currentPoint) {
      return;
    }

    Points.getPoint(id).then((point) => {
      dispatch(setCurrentPointAction(point));
      dispatch(updatePointAction(point));
    });
  };
};

export const updatePointThunk = (id: number) => {
  return async (dispatch: ThunkActionDispatch<any>) => {
    Points.getPoint(id).then((point) => {
      dispatch(updatePointAction(point));
    });
  };
};

export const postPointThunk = (
  name: string,
  description: string,
  // images: string[];
  type: PointCategory,
  citySlug: string,
  tags: string[],
  lng: number,
  lat: number,
) => {
  return async (dispatch: ThunkActionDispatch<any>, getState: () => State) => {
    const state = getState();

    const currentPointCategory = selectCurrentPointCategory(state);

    Points.postPoint(
      name,
      description,
      type,
      citySlug,
      tags,
      lng,
      lat,
    ).then((success) => {
      if (success) {
        setTimeout(() => {
          dispatch(loadPointsThunk(currentPointCategory, true))
        }, 100);
      } else {
        // TODO: error
      }
    });
  };
};

export const postPointCommentThunk = (pointId: number, text: string) => {
  return async (dispatch: ThunkActionDispatch<any>) => {
    Points.postComment(pointId, text).then((success) => {
      if (success) {
        setTimeout(() => {
          dispatch(loadCurrentPointThunk(pointId, true));
        }, 100);
      } else {
        // TODO: error
      }
    });
  };
};
