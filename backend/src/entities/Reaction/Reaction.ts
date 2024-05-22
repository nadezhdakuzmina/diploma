import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
  BeforeInsert,
  ManyToOne,
  JoinColumn,
  RelationId,
} from 'typeorm';

import { User } from '@entities/User';
import { Comment } from '@entities/Comment';
import { Thread } from '@entities/Thread';

export enum ReactionType {
  Like = 'Like',
}

@Entity({ name: 'reaction' })
class Reaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ enum: ReactionType })
  role: ReactionType;

  @Column({ type: 'timestamptz', nullable: true })
  date: Date;

  /** USER REALATION  */
  @ManyToOne(() => User, (user) => user.reactions, {
    cascade: true,
    nullable: false,
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @RelationId((reaction: Reaction) => reaction.user)
  @Column({ name: 'user_id' })
  userId: number;
  /** /USER REALATION  */

  /** COMMENT REALATION  */
  @ManyToOne(() => Comment, (comment) => comment.reactions, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn({ name: 'comment_id' })
  comment: User;

  @RelationId((reaction: Reaction) => reaction.comment)
  @Column({ name: 'comment_id', nullable: true })
  commentId: number;
  /** /COMMENT REALATION  */

  /** THREAD REALATION  */
  @ManyToOne(() => Thread, (thread) => thread.reactions, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn({ name: 'thread_id' })
  thread: User;

  @RelationId((reaction: Reaction) => reaction.thread)
  @Column({ name: 'thread_id', nullable: true })
  threadId: number;
  /** /THREAD REALATION  */

  @BeforeInsert()
  setCreationDate() {
    this.date = new Date();
  }
}

export default Reaction;
