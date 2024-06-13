import { Services } from '@api';

import { selectCurrentCity } from '@data/selectors/cities';
import { selectCurrentCountry } from '@data/selectors/countries';
import { setCurrentServiceAction, setServicesAction, updateServiceAction } from '@data/actions/services';

import type { State } from '@data/types';
import type { ThunkActionDispatch } from 'redux-thunk';
import type { Image } from '@types';

export const loadServicesThunk = (citySlug?: string, countrySlug?: string, force = false) => {
  return async (dispatch: ThunkActionDispatch<any>, getState: () => State) => {
    const { services } = getState();

    if (!force && services.services) {
      return;
    }

    Services.getServices(citySlug, countrySlug).then((services) => {
      dispatch(setServicesAction(services));
    });
  };
};

export const loadCurrentServiceThunk = (id: number, force = false) => {
  return async (dispatch: ThunkActionDispatch<any>, getState: () => State) => {
    const { services } = getState();

    if (!force && services.currentService) {
      return;
    }

    Services.getService(id).then((service) => {
      dispatch(setCurrentServiceAction(service));
      dispatch(updateServiceAction(service));
    });
  };
};

export const updateServiceThunk = (id: number) => {
  return async (dispatch: ThunkActionDispatch<any>) => {
    Services.getService(id).then((service) => {
      dispatch(updateServiceAction(service));
    });
  };
};

export const postServiceThunk = (name: string, description: string, tags: string[], logo: Image) => {
  return async (dispatch: ThunkActionDispatch<any>, getState: () => State) => {
    const state = getState();

    const currentCity = selectCurrentCity(state);
    const currentCountry = selectCurrentCountry(state);

    Services.postService(
      name,
      description,
      tags,
      logo.id,
      currentCountry?.slug,
      currentCity?.slug
    ).then((success) => {
      if (success) {
        setTimeout(() => {
          dispatch(loadServicesThunk(currentCountry?.slug, currentCity?.slug, true))
        }, 100);
      } else {
        // TODO: error
      }
    });
  };
};

export const postServiceCommentThunk = (serviceId: number, text: string) => {
  return async (dispatch: ThunkActionDispatch<any>) => {
    Services.postComment(serviceId, text).then((success) => {
      if (success) {
        setTimeout(() => {
          dispatch(loadCurrentServiceThunk(serviceId, true));
        }, 100);
      } else {
        // TODO: error
      }
    });
  };
};
