import { Thread } from '@entities/Thread';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'tag' })
class Tag extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Thread, (thread) => thread.tags)
  threads: Thread[];
}

export default Tag;
