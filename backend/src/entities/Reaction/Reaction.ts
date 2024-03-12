import { Message } from '@entities/Message';
import { Post } from '@entities/Post';
import { Thread } from '@entities/Thread';
import { User } from '@entities/User';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'reaction' })
class Reaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @ManyToMany(() => Post, (post) => post.reaction)
  @JoinTable()
  post: Post[];

  @ManyToMany(() => Thread, (thread) => thread.reaction)
  @JoinTable()
  thread: Thread[];

  @ManyToMany(() => Message, (message) => message.reaction)
  @JoinTable()
  message: Message[];

  @ManyToOne(() => User, (user) => user.reaction)
  @JoinTable()
  user: User[];
}

export default Reaction;
