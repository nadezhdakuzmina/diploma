import type { State } from '@data/types';
import type { Reaction } from '@types';

export const selectReaction = (reactionId: number) => {
    return (state: State): Reaction => {
        return state.reactions.reactions[reactionId];
    };
};
