import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
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

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Column()
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
