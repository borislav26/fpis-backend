import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name: 'drzava'})
export class Drzava {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nazivDrzave: string
}
