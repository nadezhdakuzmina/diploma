import { MapPoint } from '@entities/MapPoint';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  BeforeInsert,
  ManyToMany,
} from 'typeorm';

@Entity({ name: 'image' })
class Image extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  src: string;

  @Column({ type: 'timestamptz', nullable: true })
  date: Date;

  @ManyToMany(() => MapPoint, (point) => point.images)
  points: MapPoint[];

  @BeforeInsert()
  setCreationDate() {
    this.date = new Date();
  }
}

export default Image;
