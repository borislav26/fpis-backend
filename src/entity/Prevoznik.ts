import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Adresa } from "./Adresa"
import { Drzava } from "./Drzava"
import { Grad } from "./Grad"

@Entity({name: 'prevoznik'})
export class Prevoznik {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    brojTelefona: string

    @Column()
    brojTekucegRacuna: string

    @Column()
    nazivPrevoznika: string

    @ManyToOne(type => Grad)
    @JoinColumn({referencedColumnName: 'id', name: 'idGrada'})
    grad: number

    @ManyToOne(type => Drzava)
    @JoinColumn({referencedColumnName: 'id', name: 'idDrzave'})
    drzava: number

    @ManyToOne(type => Adresa)
    @JoinColumn({referencedColumnName: 'id', name: 'idAdrese'})
    adresa: number
}
