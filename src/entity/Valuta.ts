import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name: 'valuta'})
export class Valuta {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nazivValute: string
}
