import { City } from '@entities/City';
import { Country } from '@entities/Country';
import { Image } from '@entities/Image';
import { Reaction } from '@entities/Reaction';
import { Tag } from '@entities/Tag';
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

@Entity({ name: 'post' })
class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description?: string;

  @ManyToOne(() => Country, (country) => country.post)
  @JoinTable()
  country: Country[];

  @ManyToOne(() => City, (city) => city.post)
  @JoinTable()
  city?: City[];

  @ManyToMany(() => Tag, (tag) => tag.post)
  @JoinTable()
  tag?: Tag[];

  @ManyToMany(() => Reaction, (reaction) => reaction.post)
  @JoinTable()
  reaction: Reaction[];

  @ManyToMany(() => Image, (image) => image.post)
  @JoinTable()
  image: Image[];

  @ManyToOne(() => User, (user) => user.post)
  @JoinTable()
  user: User[];
}

export default Post;
