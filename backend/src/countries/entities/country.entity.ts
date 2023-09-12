import { Entity, Column } from 'typeorm';

@Entity()
export class Country {
    @Column({ primary: true, generated: true })
    id: number;

    @Column()
    name: string;
  
    @Column()
    population: number;
}

