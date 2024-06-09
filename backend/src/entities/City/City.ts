import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  RelationId,
  OneToMany,
  OneToOne,
} from 'typeorm';

import { Country } from '@entities/Country';
import { MapPoint } from '@entities/MapPoint';
import { Thread } from '@entities/Thread';
import { Service } from '@entities/Service';
import { Image } from '@entities/Image';

@Entity({ name: 'city' })
class City extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  /** LOGO REALATION  */
  @OneToOne(() => Image, {
    nullable: true,
  })
  @JoinColumn({ name: 'logo_id' })
  logo: Image;

  @RelationId((city: City) => city.logo)
  @Column({ name: 'logo_id', nullable: true })
  logoId: number;
  /** LOGO REALATION  */

  /** COUNTRY REALATION  */
  @ManyToOne(() => Country, (country) => country.cities, {
    cascade: true,
    nullable: false,
  })
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @RelationId((city: City) => city.country)
  @Column({ name: 'country_id' })
  countryId: number;
  /** /COUNTRY REALATION  */

  @OneToMany(() => MapPoint, (point) => point.city)
  points: City[];

  @OneToMany(() => Thread, (thread) => thread.city)
  threads: Thread[];

  @OneToMany(() => Service, (service) => service.city)
  services: Service[];
}

export default City;
