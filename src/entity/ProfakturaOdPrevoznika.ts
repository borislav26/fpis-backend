import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Drzava } from "./Drzava"
import { Grad } from "./Grad"
import { NacinPlacanja } from "./NacinPlacanja"
import { OvlascenoLicePrevoznika } from "./OvlascenoLicePrevoznika"
import { UgovorOPrevozu } from "./UgovorOPrevozu"

@Entity({name: 'profaktura_od_prevoznika'})
export class ProfakturaOdPrevoznika {

    @PrimaryGeneratedColumn()
    readonly brojProfakture: number

    @Column()
    iznos: number

    @Column()
    datumPrometa: Date

    @Column()
    datumIzdavanja: Date

    @Column()
    pozivNaBroj: string

    @ManyToOne(type => UgovorOPrevozu)
    @JoinColumn({referencedColumnName: 'brojUgovora', name: 'brojUgovoraOPrevozu'})
    ugovorOPrevozu: number

    @ManyToOne(type => Grad)
    @JoinColumn({referencedColumnName: 'id', name: 'idGrada'})
    grad: number

    @ManyToOne(type => Drzava)
    @JoinColumn({referencedColumnName: 'id', name: 'idDrzave'})
    drzava: number

    @ManyToOne(type => OvlascenoLicePrevoznika)
    @JoinColumn({referencedColumnName: 'sifra', name: 'sifraOvlascenogLicaPrevoznika'})
    ovlascenoLicePrevoznika: number

    @ManyToOne(type => NacinPlacanja)
    @JoinColumn({referencedColumnName: 'id', name: 'idNacinaPlacanja'})
    nacinPlacanja: number

}
