import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name: 'obavestenje_o_izvrsenoj_uplati_prevoza'})
export class ObavestenjeOIzvrsenojUplatiPrevoza {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    datumObavestenja: Date

    @Column()
    svrha: string

}
