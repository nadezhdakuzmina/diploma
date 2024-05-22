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

import { City } from '@entities/City';
import { Comment } from '@entities/Comment';
import { Country } from '@entities/Country';
import { Tag } from '@entities/Tag';
import { Image } from '@entities/Image';
import { User } from '@entities/User';

@Entity({ name: 'service' })
class Service extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  /** USER REALATION  */
  @ManyToOne(() => User, (user) => user.services, {
    nullable: false,
  })
  @JoinColumn({ name: 'user_id' })
  user: City;

  @RelationId((service: Service) => service.user)
  @Column({ name: 'user_id' })
  userId: number;
  /** /USER REALATION  */

  /** LOGO REALATION  */
  @OneToOne(() => Image, (image) => image.service, {
    nullable: true,
  })
  @JoinColumn({ name: 'logo_id' })
  logo: Image;

  @RelationId((city: City) => city.logo)
  @Column({ name: 'logo_id', nullable: true })
  logoId: number;
  /** LOGO REALATION  */

  /** COUNTRY REALATION  */
  @ManyToOne(() => Country, (country) => country.services, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @RelationId((service: Service) => service.country)
  @Column({ name: 'country_id', nullable: true })
  countryId: number;
  /** /COUNTRY REALATION  */

  /** CITY REALATION  */
  @ManyToOne(() => City, (city) => city.services, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn({ name: 'city_id' })
  city: City;

  @RelationId((service: Service) => service.city)
  @Column({ name: 'city_id', nullable: true })
  cityId: number;
  /** /CITY REALATION  */

  @OneToMany(() => Comment, (comment) => comment.service)
  comments: Comment[];

  @OneToMany(() => Tag, (tag) => tag.service)
  tags: Tag[];
}

export default Service;
