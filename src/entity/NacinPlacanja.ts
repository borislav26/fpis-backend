import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'nacin_placanja'})
export class NacinPlacanja {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    opisNacinaPlacanja: string
}