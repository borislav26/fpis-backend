import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Prevoznik } from "./Prevoznik"

@Entity({name: 'ovlasceno_lice_prevoznika'})
export class OvlascenoLicePrevoznika {

    @PrimaryGeneratedColumn()
    sifra: string

    @ManyToOne(type => Prevoznik)
    @JoinColumn({referencedColumnName: 'id', name: 'idPrevoznika'})
    prevoznik: number

    @Column()
    imePrezime: string
}
