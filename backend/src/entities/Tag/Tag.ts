import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  RelationId,
  BeforeInsert,
} from 'typeorm';

import { MapPoint } from '@entities/MapPoint';
import { Thread } from '@entities/Thread';
import { Service } from '@entities/Service';

@Entity({ name: 'tag' })
class Tag extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  /** POINT REALATION  */
  @ManyToOne(() => MapPoint, (point) => point.tags, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn({ name: 'point_id' })
  point: MapPoint;

  @RelationId((tag: Tag) => tag.point)
  @Column({ name: 'point_id', nullable: true })
  pointId: number;
  /** /POINT REALATION  */

  /** THREAD REALATION  */
  @ManyToOne(() => Thread, (thread) => thread.tags, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn({ name: 'thread_id' })
  thread: Thread;

  @RelationId((tag: Tag) => tag.thread)
  @Column({ name: 'thread_id', nullable: true })
  threadId: number;
  /** /THREAD REALATION  */

  /** SERVICE REALATION  */
  @ManyToOne(() => Service, (service) => service.tags, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn({ name: 'service_id' })
  service: Service;

  @RelationId((tag: Tag) => tag.service)
  @Column({ name: 'service_id', nullable: true })
  serviceId: number;
  /** /SERVICE REALATION  */
}

export default Tag;
