import { Threads } from '@api';

import { setCurrentThreadAction, setThreadsAction, updateThreadAction } from '@data/actions/threads';
import { loadReactionsThunk } from './reactions';
import { selectCurrentCity } from '@data/selectors/cities';
import { selectCurrentCountry } from '@data/selectors/countries';

import type { State } from '@data/types';
import type { ThunkActionDispatch } from 'redux-thunk';

export const loadThreadsThunk = (citySlug?: string, countrySlug?: string, force = false) => {
  return async (dispatch: ThunkActionDispatch<any>, getState: () => State) => {
    const { threads } = getState();

    if (!force && threads.threads) {
      return;
    }

    Threads.getThreads(citySlug, countrySlug).then((threads) => {
      dispatch(setThreadsAction(threads));
    });
  };
};

export const loadCurrentThreadThunk = (id: number, force = false) => {
  return async (dispatch: ThunkActionDispatch<any>, getState: () => State) => {
    const { threads } = getState();

    if (!force && threads.currentThread) {
      return;
    }

    Threads.getThread(id).then((thread) => {
      dispatch(setCurrentThreadAction(thread));
      dispatch(updateThreadAction(thread));
    });
  };
};

export const updateThreadThunk = (id: number) => {
  return async (dispatch: ThunkActionDispatch<any>) => {
    Threads.getThread(id).then((thread) => {
      dispatch(updateThreadAction(thread));
    });
  };
};

export const postThreadThunk = (text: string, tags: string[]) => {
  return async (dispatch: ThunkActionDispatch<any>, getState: () => State) => {
    const state = getState();

    const currentCity = selectCurrentCity(state);
    const currentCountry = selectCurrentCountry(state);

    Threads.postThread(text, tags, currentCountry?.slug, currentCity?.slug).then((success) => {
      if (success) {
        setTimeout(() => {
          dispatch(loadThreadsThunk(currentCountry?.slug, currentCity?.slug, true))
        }, 100);
      } else {
        // TODO: error
      }
    });
  };
};

export const postThreadCommentThunk = (threadId: number, text: string) => {
  return async (dispatch: ThunkActionDispatch<any>) => {
    Threads.postComment(threadId, text).then((success) => {
      if (success) {
        setTimeout(() => {
          dispatch(loadCurrentThreadThunk(threadId, true));
        }, 100);
      } else {
        // TODO: error
      }
    });
  };
};

export const postThreadReactionThunk = (threadId: number) => {
  return async (dispatch: ThunkActionDispatch<any>) => {
    Threads.postReaction(threadId).then((success) => {

      if (success) {
        setTimeout(() => {
          dispatch(loadReactionsThunk(true));
          dispatch(updateThreadThunk(threadId));
        }, 100);
      } else {
        // TODO: error
      }
    });
  };
};
