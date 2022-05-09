import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { ObavestenjeOUzimanjuOsiguranja } from "./ObavestenjeOUzimanjuOsiguranja"
import { OsiguravajucaKuca } from "./OsiguravajucaKuca"
import { Radnik } from "./Radnik"

@Entity({name: 'zahtev_za_osiguranje'})
export class ZahtevZaOsiguranje {

    @PrimaryGeneratedColumn()
    readonly sifraZahteva: number

    @Column()
    datum: Date

    @Column()
    napomena: string

    @ManyToOne(type => ObavestenjeOUzimanjuOsiguranja)
    @JoinColumn({referencedColumnName: 'id', name: 'idObavestenjaOsiguranja'})
    obavestenjeOsiguranja: number

    @ManyToOne(type => OsiguravajucaKuca)
    @JoinColumn({referencedColumnName: 'id', name: 'idOsiguravajuceKuce'})
    osiguravajucaKuca: number

    @ManyToOne(type => Radnik)
    @JoinColumn({referencedColumnName: 'sifraRadnika', name: 'sifraRadnika'})
    radnik: number
}
