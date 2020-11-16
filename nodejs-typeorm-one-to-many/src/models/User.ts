import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Photo from './Photo';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Photo, photo => photo.user)
  photos: Photo;
}

export default User;
