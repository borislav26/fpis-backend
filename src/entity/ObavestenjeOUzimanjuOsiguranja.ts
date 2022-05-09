import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name: 'obavestenje_o_uzimanju_osiguranja'})
export class ObavestenjeOUzimanjuOsiguranja {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    datum: Date

    @Column()
    opis: string
}
