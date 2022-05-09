import { Entity, Column, ManyToOne, JoinColumn, Unique, PrimaryColumn } from "typeorm"
import { RacunSaBrutoCenom } from "./RacunSaBrutoCenom"

@Entity({name: 'stavka_racuna_sa_bruto_cenom'})
@Unique('stavka_racuna_unique', ['redniBroj', 'brojRacuna'])
export class StavkaRacuna {

    @PrimaryColumn()
    redniBroj: string

    @ManyToOne(() => RacunSaBrutoCenom, racun => racun.brojRacuna, { cascade: true, onDelete: 'CASCADE'})
    @JoinColumn({referencedColumnName: 'brojRacuna', name: 'brojRacuna'})
    @PrimaryColumn()
    brojRacuna: number

    @Column({nullable: false})
    nazivStavke: string

    @Column()
    netoCena: number

    @Column()
    marza: number

    @Column()
    brutoCena: number
}
