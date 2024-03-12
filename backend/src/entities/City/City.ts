import { Country } from '@entities/Country';
import { Image } from '@entities/Image';
import { Post } from '@entities/Post';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  JoinTable,
  OneToMany,
  ManyToMany,
} from 'typeorm';

@Entity({ name: 'city' })
class City extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description?: string;

  @ManyToOne(() => Country, (country) => country.city)
  @JoinTable()
  country: Country[];

  @OneToMany(() => Post, (post) => post.city)
  @JoinTable()
  post: Post[];

  @ManyToOne(() => Image, (image) => image.city)
  @JoinTable()
  image: Image[];
}

export default City;
