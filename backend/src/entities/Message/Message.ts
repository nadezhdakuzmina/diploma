import { Reaction } from '@entities/Reaction';
import { Thread } from '@entities/Thread';
import { User } from '@entities/User';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  JoinTable,
  ManyToMany,
} from 'typeorm';

@Entity({ name: 'message' })
class Message extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => Thread, (thread) => thread.message)
  @JoinTable()
  thread: Thread[];

  @ManyToMany(() => Reaction, (reaction) => reaction.message)
  @JoinTable()
  reaction: Reaction[];

  @ManyToOne(() => User, (user) => user.message)
  @JoinTable()
  user: User[];
}

export default Message;
