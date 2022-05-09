import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Adresa } from "./Adresa"
import { Drzava } from "./Drzava"
import { Grad } from "./Grad"

@Entity({name: 'osiguravajuca_kuca'})
export class OsiguravajucaKuca {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nazivOsiguravajuceKuce: string

    @Column()
    brojTekucegRacuna: string

    @Column()
    telefonOsiguravajuceKuce: string

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
