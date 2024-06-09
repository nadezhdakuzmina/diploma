import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  BeforeInsert,
} from 'typeorm';

@Entity({ name: 'image' })
class Image extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  src: string;

  @Column({ type: 'timestamptz', nullable: true })
  date: Date;

  @BeforeInsert()
  setCreationDate() {
    this.date = new Date();
  }
}

export default Image;
