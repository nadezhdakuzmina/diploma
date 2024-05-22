import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
  OneToOne,
  JoinColumn,
  RelationId,
} from 'typeorm';

import { City } from '@entities/City';
import { Thread } from '@entities/Thread';
import { Service } from '@entities/Service';
import { Image } from '@entities/Image';

@Entity({ name: 'country' })
class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  /** LOGO REALATION  */
  @OneToOne(() => Image, (image) => image.country, {
    nullable: true,
  })
  @JoinColumn({ name: 'logo_id' })
  logo: Image;

  @RelationId((city: City) => city.logo)
  @Column({ name: 'logo_id', nullable: true })
  logoId: number;
  /** LOGO REALATION  */

  @OneToMany(() => City, (city) => city.country)
  cities: City[];

  @OneToMany(() => Thread, (thread) => thread.country)
  threads: Thread[];

  @OneToMany(() => Service, (service) => service.country)
  services: Service[];
}

export default Country;
