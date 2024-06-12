import { Threads } from '@api';

import { setCurrentThreadAction, setThreadsAction } from '@data/actions/threads';

import type { State } from '@data/types';
import type { ThunkActionDispatch } from 'redux-thunk';

export const loadThreadsThunk = (citySlug?: string, countrySlug?: string) => {
  return async (dispatch: ThunkActionDispatch<any>) => {
    Threads.getThreads(citySlug, countrySlug).then((threads) => {
      dispatch(setThreadsAction(threads));
    });
  };
};

export const loadCurrentThreadThunk = (id: number) => {
  return async (dispatch: ThunkActionDispatch<any>) => {
    Threads.getThread(id).then((thread) => {
      dispatch(setCurrentThreadAction(thread));
    });
  };
};

export const postThreadCommentThunk = (threadId: number, text: string) => {
  return async (dispatch: ThunkActionDispatch<any>) => {
    Threads.postComment(threadId, text).then((success) => {
      if (success) {
        dispatch(loadCurrentThreadThunk(threadId));
      } else {
        // TODO: error
      }
    });
  };
};
