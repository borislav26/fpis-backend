import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Korisnik } from "./Korisnik"
import { Radnik } from "./Radnik"

@Entity({name: 'potvrda_rezervacije'})
export class PotvrdaRezervacije {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    opis: string

    @ManyToOne(type => Radnik)
    @JoinColumn({referencedColumnName: 'sifraRadnika', name: 'sifraRadnika'})
    radnik: number

    @ManyToOne(type => Korisnik)
    @JoinColumn({referencedColumnName: 'jmbg', name: 'jmbg'})
    korisnik: number
}
