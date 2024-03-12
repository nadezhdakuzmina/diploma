import { Post } from '@entities/Post';
import { Thread } from '@entities/Thread';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity({ name: 'tag' })
class Tag extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @Column()
  description?: string;

  @ManyToMany(() => Post, (post) => post.tag)
  @JoinTable()
  post: Post[];

  @ManyToMany(() => Thread, (thread) => thread.tag)
  @JoinTable()
  thread: Thread[];
}

export default Tag;
