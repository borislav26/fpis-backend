import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { PotvrdaRezervacije } from "./PotvrdaRezervacije"
import { ProgramiPutovanja } from "./ProgramiPutovanja"

@Entity({name: 'program_putovanja'})
export class ProgramPutovanja {

    @PrimaryGeneratedColumn()
    sifraPrograma: string

    @Column({nullable: false})
    ukljucenoUCenu: string

    @Column({nullable: false})
    nijeUkljucenoUCenu: string

    @Column()
    iznos: number

    @ManyToOne(type => PotvrdaRezervacije)
    @JoinColumn({referencedColumnName: 'id', name: 'idPotvrde'})
    potvrdaRezervacije: number

    @ManyToOne(type => ProgramiPutovanja)
    @JoinColumn({referencedColumnName: 'redniBrojPrograma', name: 'redniBrojPrograma'})
    programiPutovanja: number
}
