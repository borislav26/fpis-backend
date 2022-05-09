import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"

@Entity({name: 'model'})
export class Model {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    opisModela: string
}
