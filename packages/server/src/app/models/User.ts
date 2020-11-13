/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import bcrypt from 'bcryptjs';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }
}
