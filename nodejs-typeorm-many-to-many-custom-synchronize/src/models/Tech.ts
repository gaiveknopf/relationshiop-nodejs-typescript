import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import UsersToTechs from './UsersToTechs';

@Entity('techs')
class Tech {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @OneToMany(() => UsersToTechs, usersToTechs => usersToTechs.tech)
  usersToTechs: UsersToTechs[];
}

export default Tech;
