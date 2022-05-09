import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name: 'radnik'})
export class Radnik {

    @PrimaryGeneratedColumn()
    sifraRadnika: string

    @Column()
    imePrezime: string
}
