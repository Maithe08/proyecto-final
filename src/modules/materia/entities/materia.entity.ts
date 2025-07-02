import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Materia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  codigo: string;

  @Column()
  creditos: number;
}
