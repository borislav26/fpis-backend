import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Drzava } from "./Drzava"
import { Grad } from "./Grad"

@Entity({name: 'adresa'})
export class Adresa {

    @PrimaryGeneratedColumn()
    readonly id: number

    @ManyToOne(type => Drzava)
    @JoinColumn({referencedColumnName: 'id', name: 'idDrzave'})
    drzava: number

    @ManyToOne(type => Grad)
    @JoinColumn({referencedColumnName: 'id', name: 'idGrada'})
    grad: number

    @Column()
    ulica: string

    @Column()
    broj: number
}
