import { Country } from '@entities/Country';
import { Message } from '@entities/Message';
import { Reaction } from '@entities/Reaction';
import { Tag } from '@entities/Tag';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  JoinTable,
  ManyToMany,
} from 'typeorm';

@Entity({ name: 'thread' })
class Thread extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Country, (country) => country.thread)
  @JoinTable()
  country: Country[];

  @ManyToMany(() => Tag, (tag) => tag.thread)
  @JoinTable()
  tag: Tag[];

  @ManyToMany(() => Reaction, (reaction) => reaction.thread)
  @JoinTable()
  reaction: Reaction[];

  @ManyToOne(() => Message, (message) => message.thread)
  @JoinTable()
  message: Message[];
}

export default Thread;
