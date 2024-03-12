import { Image } from '@entities/Image';
import { Message } from '@entities/Message';
import { Post } from '@entities/Post';
import { Reaction } from '@entities/Reaction';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
  JoinTable,
  OneToOne,
} from 'typeorm';

@Entity({ name: 'users' })
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Message, (message) => message.user)
  @JoinTable()
  message: Message[];

  @OneToMany(() => Post, (post) => post.user)
  @JoinTable()
  post: Post[];

  @OneToOne(() => Image, (image) => image.user)
  @JoinTable()
  image?: Image[];

  @OneToMany(() => Reaction, (reaction) => reaction.user)
  @JoinTable()
  reaction: Reaction[];
}

export default User;
