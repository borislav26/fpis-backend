import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { NacinPlacanja } from "./NacinPlacanja"
import { OvlascenoLiceOsiguravajuceKuce } from "./OvlascenoLiceOsiguravajuceKuce"
import { UgovorOOsiguranju } from "./UgovorOOsiguranju"

@Entity({name: 'racun_osiguranja'})
export class RacunOsiguranja {

    @PrimaryGeneratedColumn()
    readonly brojRacuna: number

    @Column()
    datum: Date

    @Column()
    iznos: number

    @Column()
    pozivNaBroj: string

    @ManyToOne(type => UgovorOOsiguranju)
    @JoinColumn({referencedColumnName: 'brojUgovora', name: 'brojUgovoraOOsiguranju'})
    ugovorOOsiguranju: number

    @ManyToOne(type => OvlascenoLiceOsiguravajuceKuce)
    @JoinColumn({referencedColumnName: 'idOsiguravajuceKuce', name: 'idOsiguravajuceKuce'})
    ovlascenoLiceOsiguravajuceKuce: number

    @ManyToOne(type => NacinPlacanja)
    @JoinColumn({referencedColumnName: 'id', name: 'idNacinaPlacanja'})
    nacinPlacanja: number
}
