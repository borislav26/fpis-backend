import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name: 'obavestenje_o_izvrsenoj_uplati_hotela'})
export class ObavestenjeOIzvrsenojUplatiHotela {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    datumObavestenja: Date

    @Column()
    svrha: string

}
