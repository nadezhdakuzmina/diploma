export type Reaction = {
  id: number;
  type: 'Like',
  date: string;
  threadId: number;
};

export type ReactionRecord = Record<number, Reaction>;
