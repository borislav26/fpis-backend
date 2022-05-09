import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Drzava } from "./Drzava"
import { OvlascenoLiceOsiguravajuceKuce } from "./OvlascenoLiceOsiguravajuceKuce"
import { ZahtevZaOsiguranje } from "./ZahtevZaOsiguranje"

@Entity({name: 'ugovor_o_osiguranju'})
export class UgovorOOsiguranju {

    @PrimaryGeneratedColumn()
    readonly brojUgovora: number

    @Column()
    datum: Date

    @Column()
    potpisao: string

    @ManyToOne(type => Drzava)
    @JoinColumn({referencedColumnName: 'id', name: 'idDrzave'})
    drzava: number

    @ManyToOne(type => OvlascenoLiceOsiguravajuceKuce)
    @JoinColumn({referencedColumnName: 'idOsiguravajuceKuce', name: 'idOsiguravajuceKuce'})
    ovlascenoLiceOsiguravajuceKuce: number

    @ManyToOne(type => ZahtevZaOsiguranje)
    @JoinColumn({referencedColumnName: 'sifraZahteva', name: 'sifraZahteva'})
    zahtevZaOsiguranje: number
}
