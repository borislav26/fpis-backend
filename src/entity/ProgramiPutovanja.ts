import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name: 'programi_putovanja'})
export class ProgramiPutovanja {

    @PrimaryGeneratedColumn()
    redniBrojPrograma: number

    @Column()
    datumKreiranja: Date

    @Column()
    sablonPrograma: string

}
