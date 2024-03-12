import { City } from '@entities/City';
import { Post } from '@entities/Post';
import { Thread } from '@entities/Thread';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
  JoinTable,
} from 'typeorm';

@Entity({ name: 'country' })
class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => City, (city) => city.country)
  @JoinTable()
  city: City[];

  @OneToMany(() => Post, (post) => post.country)
  @JoinTable()
  post: Post[];

  @OneToMany(() => Thread, (thread) => thread.country)
  @JoinTable()
  thread: Thread[];
}

export default Country;
