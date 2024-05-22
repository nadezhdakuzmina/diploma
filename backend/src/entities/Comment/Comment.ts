import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  RelationId,
  BeforeInsert,
  OneToMany,
} from 'typeorm';

import { User } from '@entities/User';
import { MapPoint } from '@entities/MapPoint';
import { Thread } from '@entities/Thread';
import { Service } from '@entities/Service';
import { Reaction } from '@entities/Reaction';

@Entity({ name: 'comment' })
class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamptz', nullable: true })
  date: Date;

  @Column()
  text: string;

  /** USER REALATION  */
  @ManyToOne(() => User, (user) => user.comments, {
    cascade: true,
    nullable: false,
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @RelationId((comment: Comment) => comment.user)
  @Column({ name: 'user_id' })
  userId: number;
  /** /USER REALATION  */

  /** POINT REALATION  */
  @ManyToOne(() => MapPoint, (point) => point.comments, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn({ name: 'point_id' })
  point: MapPoint;

  @RelationId((comment: Comment) => comment.point)
  @Column({ name: 'point_id', nullable: true })
  pointId: number;
  /** /POINT REALATION  */

  /** THREAD REALATION  */
  @ManyToOne(() => Thread, (thread) => thread.comments, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn({ name: 'thread_id' })
  thread: Thread;

  @RelationId((comment: Comment) => comment.thread)
  @Column({ name: 'thread_id', nullable: true })
  threadId: number;
  /** /THREAD REALATION  */

  /** SERVICE REALATION  */
  @ManyToOne(() => Service, (service) => service.comments, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn({ name: 'service_id' })
  service: Service;

  @RelationId((comment: Comment) => comment.service)
  @Column({ name: 'service_id', nullable: true })
  serviceId: number;
  /** /SERVICE REALATION  */

  @OneToMany(() => Reaction, (reaction) => reaction.comment)
  reactions: Reaction[];

  @BeforeInsert()
  setCreationDate() {
    this.date = new Date();
  }
}

export default Comment;
