import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  BeforeInsert,
  ManyToOne,
  RelationId,
  JoinColumn,
  OneToOne,
} from 'typeorm';

import { City } from '@entities/City';
import { MapPoint } from '@entities/MapPoint';
import { Country } from '@entities/Country';
import { Service } from '@entities/Service';

@Entity({ name: 'image' })
class Image extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  src: string;

  @Column({ type: 'timestamptz', nullable: true })
  date: Date;

  /** CITY REALATION  */
  @OneToOne(() => City, (city) => city.logo, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn({ name: 'city_id' })
  city: City;

  @RelationId((image: Image) => image.city)
  @Column({ name: 'city_id', nullable: true })
  cityId: number;
  /** /CITY REALATION  */

  /** COUNTRY REALATION  */
  @OneToOne(() => Country, (country) => country.logo, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @RelationId((image: Image) => image.country)
  @Column({ name: 'country_id', nullable: true })
  countryId: number;
  /** /COUNTRY REALATION  */

  /** SERVICE REALATION  */
  @OneToOne(() => Country, (service) => service.logo, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn({ name: 'service_id' })
  service: Service;

  @RelationId((image: Image) => image.service)
  @Column({ name: 'service_id', nullable: true })
  serviceId: number;
  /** /SERVICE REALATION  */

  /** POINT REALATION  */
  @ManyToOne(() => MapPoint, (point) => point.images, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn({ name: 'point_id' })
  point: MapPoint;

  @RelationId((image: Image) => image.point)
  @Column({ name: 'point_id', nullable: true })
  pointId: number;
  /** /POINT REALATION  */

  @BeforeInsert()
  setCreationDate() {
    this.date = new Date();
  }
}

export default Image;
