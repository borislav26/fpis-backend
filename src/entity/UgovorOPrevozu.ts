import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Drzava } from "./Drzava"
import { OvlascenoLicePrevoznika } from "./OvlascenoLicePrevoznika"

@Entity({name: 'ugovor_o_prevozu'})
export class UgovorOPrevozu {

    @PrimaryGeneratedColumn()
    readonly brojUgovora: number

    @Column()
    datum: Date

    @Column()
    potpisao: string

    @ManyToOne(type => Drzava)
    @JoinColumn({referencedColumnName: 'id', name: 'idDrzave'})
    drzava: number

    @ManyToOne(type => OvlascenoLicePrevoznika)
    @JoinColumn({referencedColumnName: 'sifra', name: 'sifra'})
    sifra: number
}
