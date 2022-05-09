import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Adresa } from "./Adresa"
import { Drzava } from "./Drzava"
import { Grad } from "./Grad"

@Entity({name: 'hotel'})
export class Hotel {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    telefonHotela: string

    @Column()
    brojTekucegRacuna: string

    @Column()
    nazivHotela: string

    @ManyToOne(type => Drzava)
    @JoinColumn({referencedColumnName: 'id', name: 'idDrzave'})
    drzava: number

    @ManyToOne(type => Grad)
    @JoinColumn({referencedColumnName: 'id', name: 'idGrada'})
    grad: number

    @ManyToOne(type => Adresa)
    @JoinColumn({referencedColumnName: 'id', name: 'idAdrese'})
    adresa: number
}