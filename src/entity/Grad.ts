import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Drzava } from "./Drzava"

@Entity({name: 'grad'})
export class Grad {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type => Drzava)
    @JoinColumn({referencedColumnName: 'id', name: 'idDrzave'})
    drzava: number

    @Column()
    nazivGrada: string
}
