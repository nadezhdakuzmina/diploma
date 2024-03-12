import { City } from '@entities/City';
import { Post } from '@entities/Post';
import { User } from '@entities/User';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  JoinTable,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity({ name: 'image' })
class Image extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  src: string;

  @Column()
  description?: string;

  @OneToMany(() => City, (city) => city.image)
  @JoinTable()
  city?: City[];

  @ManyToMany(() => Post, (post) => post.image)
  @JoinTable()
  post?: Post[];

  @OneToOne(() => User, (user) => user.image)
  @JoinTable()
  user: User[];
}

export default Image;
