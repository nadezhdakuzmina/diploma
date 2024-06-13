import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  RelationId,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { City } from '@entities/City';
import { Comment } from '@entities/Comment';
import { Tag } from '@entities/Tag';
import { Image } from '@entities/Image';
import { User } from '@entities/User';

export enum PointCategory {
  Popular = 'Popular',
  Nature = 'Nature',
  Beaches = 'Beaches',
  Insta = 'Insta',
  Hotels = 'Hotels',
  Restorans = 'Restorans',
  Locals = 'Locals',
  NotPopular = 'NotPopular',
}

@Entity({ name: 'map_point' })
class MapPoint extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ enum: PointCategory })
  type: PointCategory;

  @Column({ nullable: false, type: 'float8' })
  lng: number;

  @Column({ nullable: false, type: 'float8' })
  lat: number;

  @Column({ default: false })
  moderated: boolean;

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

  @ManyToMany(() => Image, (image) => image.points)
  @JoinTable({
    name: 'point_images',
    joinColumn: { name: 'point_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'image_id', referencedColumnName: 'id' },
  })
  images: Image[];

  @OneToMany(() => Comment, (comment) => comment.point)
  comments: Comment[];

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];
}

export default MapPoint;
