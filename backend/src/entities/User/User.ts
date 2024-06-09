import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

import { Comment } from '@entities/Comment';
import { Thread } from '@entities/Thread';
import { Reaction } from '@entities/Reaction';
import { MapPoint } from '@entities/MapPoint';
import { Service } from '@entities/Service';

export enum Role {
  Default = 'Default',
  Admin = 'Admin',
}

@Entity({ name: 'user' })
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: true, default: null })
  vkId: number;

  @Column({ nullable: true, default: null })
  vkAccessToken: string;

  @Column({ nullable: true, default: null })
  vkAccessTokenId: number;

  @Column({ type: 'timestamptz', nullable: true, default: null })
  vkAccessTokenExpires: Date;

  @Column({ nullable: true, default: null })
  userAccessToken: string;

  @Column({ nullable: true, default: null })
  photo: string;

  @Column({ nullable: true, default: null })
  photo200: string;

  @Column({ nullable: true, default: null })
  firstName: string;

  @Column({ nullable: true, default: null })
  lastName: string;

  @Column({ unique: true, nullable: true, default: null })
  username: string;

  @Column({ nullable: true, default: null })
  password: string;

  @Column({ enum: Role, default: Role.Default })
  role: Role;

  @OneToMany(() => Thread, (thread) => thread.user)
  threads: Thread[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @OneToMany(() => Reaction, (reaction) => reaction.user)
  reactions: Reaction[];

  @OneToMany(() => MapPoint, (point) => point.user)
  points: MapPoint[];

  @OneToMany(() => Service, (service) => service.user)
  services: Service[];
}

export default User;
