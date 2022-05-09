import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Hotel } from "./Hotel"
import { NacinPlacanja } from "./NacinPlacanja"
import { ZahtevZaOsiguranje } from "./ZahtevZaOsiguranje"

@Entity({name: 'faktura_hotela'})
export class FakturaHotela {

    @PrimaryGeneratedColumn()
    brojFakture: number

    @Column()
    datum: Date

    @Column()
    ukupanIznos: number

    @Column()
    pozivNaBroj: string

    @ManyToOne(type => Hotel)
    @JoinColumn({referencedColumnName: 'id', name: 'idHotela'})
    hotel: number

    @ManyToOne(type => NacinPlacanja)
    @JoinColumn({referencedColumnName: 'id', name: 'idNacinaPlacanja'})
    nacinPlacanja: number

    @ManyToOne(type => ZahtevZaOsiguranje)
    @JoinColumn({referencedColumnName: 'sifraZahteva', name: 'sifraZahteva'})
    zahtevZaOsiguranje: number
}