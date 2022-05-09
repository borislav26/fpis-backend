import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name: 'obavestenje_o_izvrsenoj_uplati_osiguranja'})
export class ObavestenjeOIzvrsenojUplatiOsiguranja {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    datumObavestenja: Date

    @Column()
    svrha: string

}
