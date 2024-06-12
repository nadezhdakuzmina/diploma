import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  RelationId,
  OneToMany,
  BeforeInsert,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { City } from '@entities/City';
import { Comment } from '@entities/Comment';
import { User } from '@entities/User';
import { Country } from '@entities/Country';
import { Tag } from '@entities/Tag';
import { Reaction } from '@entities/Reaction';

@Entity({ name: 'thread' })
class Thread extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamptz', nullable: true })
  date: Date;

  @Column()
  text: string;

  /** USER REALATION  */
  @ManyToOne(() => User, (user) => user.threads, {
    cascade: true,
    nullable: false,
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @RelationId((thread: Thread) => thread.user)
  @Column({ name: 'user_id' })
  userId: number;
  /** /USER REALATION  */

  /** COUNTRY REALATION  */
  @ManyToOne(() => Country, (country) => country.threads, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @RelationId((thread: Thread) => thread.country)
  @Column({ name: 'country_id', nullable: true })
  countryId: number;
  /** /COUNTRY REALATION  */

  /** CITY REALATION  */
  @ManyToOne(() => City, (city) => city.threads, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn({ name: 'city_id' })
  city: City;

  @RelationId((thread: Thread) => thread.city)
  @Column({ name: 'city_id', nullable: true })
  cityId: number;
  /** /CITY REALATION  */

  @OneToMany(() => Comment, (comment) => comment.thread)
  comments: Comment[];

  @OneToMany(() => Reaction, (reaction) => reaction.thread)
  reactions: Reaction[];

  @ManyToMany(() => Tag, (tag) => tag.threads)
  @JoinTable({
    name: 'thread_tags',
    joinColumn: { name: 'thread_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id' },
  })
  tags: Tag[];

  @BeforeInsert()
  setCreationDate() {
    this.date = new Date();
  }
}

export default Thread;
