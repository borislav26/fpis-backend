import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm"

@Entity({name: 'ovlasceno_lice_osiguravajuce_kuce'})
export class OvlascenoLiceOsiguravajuceKuce {

    @PrimaryGeneratedColumn()
    idOsiguravajuceKuce: number

    @PrimaryColumn()
    sifraOL: number

    @Column()
    imePrezime: string
}
