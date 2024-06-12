import { Reactions } from '@api';

import { setReactionsAction } from '@data/actions/reactions';
import { updateThreadThunk } from './threads';

import type { State } from '@data/types';
import type { ReactionRecord } from '@types';
import type { ThunkActionDispatch } from 'redux-thunk';

export const loadReactionsThunk = (force = false) => {
  return async (dispatch: ThunkActionDispatch<any>, getState: () => State) => {
    const { reactions } = getState();

    if (!force && reactions.reactions) {
      return;
    }

    Reactions.getReactions().then((reactions) => {
      const reactionsRecord = reactions.reduce<ReactionRecord>((acc, reaction) => {
        return {
          ...acc,
          [reaction.threadId]: reaction,
        };
      }, {});

      dispatch(setReactionsAction(reactionsRecord));
    });
  };
};

export const revokeReactionThunk = (reactionId: number, threadId: number) => {
  return async (dispatch: ThunkActionDispatch<any>, getState: () => State) => {
    Reactions.revokeReaction(reactionId).then((success) => {
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
