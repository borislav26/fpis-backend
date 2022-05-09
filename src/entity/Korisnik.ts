import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, PrimaryColumn, Unique } from "typeorm"
import { Adresa } from "./Adresa"
import { Drzava } from "./Drzava"
import { Grad } from "./Grad"
import { ObavestenjeOUzimanjuOsiguranja } from "./ObavestenjeOUzimanjuOsiguranja"
import { ProgramPutovanja } from "./ProgramPutovanja"

@Entity({name: 'korisnik'})
@Unique('korisnik_jmbg_unique', ['jmbg'])
export class Korisnik {

    @PrimaryColumn()
    jmbg: string

    @Column()
    imePrezime: string

    @Column()
    brojPasosa: string

    @Column()
    datumRodjenja: Date

    @Column()
    brojTelefona: string

    @ManyToOne(type => ProgramPutovanja)
    @JoinColumn({referencedColumnName: 'sifraPrograma', name: 'sifraPrograma'})
    programPutovanja: string

    @ManyToOne(type => ObavestenjeOUzimanjuOsiguranja)
    @JoinColumn({referencedColumnName: 'id', name: 'idObavestenjaOsiguranja'})
    obavestenjeOUzimanjuOsiguranja: number

    @ManyToOne(type => Adresa)
    @JoinColumn({referencedColumnName: 'id', name: 'idAdrese'})
    adresa: number
}
