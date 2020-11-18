import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './User';

@Entity('profiles')
class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  gender: string;

  @Column()
  photo: string;

  @OneToOne(() => User, user => user.profile)
  user: User;
}

export default Profile;
