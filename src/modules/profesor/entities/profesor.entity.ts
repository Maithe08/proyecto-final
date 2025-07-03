import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Profesor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  especialidad: string;

  @Column()
  correo: string;
}
