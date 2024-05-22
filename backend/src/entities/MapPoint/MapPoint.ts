import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  RelationId,
  OneToMany,
} from 'typeorm';

import { City } from '@entities/City';
import { Comment } from '@entities/Comment';
import { Tag } from '@entities/Tag';
import { Image } from '@entities/Image';
import { User } from '@entities/User';

@Entity({ name: 'map_point' })
class MapPoint extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  lng: number;

  @Column()
  lat: number;

  /** USER REALATION  */
  @ManyToOne(() => User, (user) => user.points, {
    nullable: false,
  })
  @JoinColumn({ name: 'user_id' })
  user: City;

  @RelationId((point: MapPoint) => point.user)
  @Column({ name: 'user_id' })
  userId: number;
  /** /USER REALATION  */

  /** CITY REALATION  */
  @ManyToOne(() => City, (city) => city.points, {
    nullable: false,
  })
  @JoinColumn({ name: 'city_id' })
  city: City;

  @RelationId((point: MapPoint) => point.city)
  @Column({ name: 'city_id' })
  cityId: number;
  /** /CITY REALATION  */

  @OneToMany(() => Image, (image) => image.point)
  images: Image[];

  @OneToMany(() => Comment, (comment) => comment.point)
  comments: Comment[];

  @OneToMany(() => Tag, (tag) => tag.point)
  tags: Tag[];
}

export default MapPoint;
