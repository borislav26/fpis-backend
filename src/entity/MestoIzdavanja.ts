import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'mesto_izdavanja'})
export class MestoIzdavanja {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nazivMestaIzdavanja: string
}