import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { FakturaHotela } from "./FakturaHotela"
import { Korisnik } from "./Korisnik"
import { MestoIzdavanja } from "./MestoIzdavanja"
import { NacinPlacanja } from "./NacinPlacanja"
import { ProfakturaOdPrevoznika } from "./ProfakturaOdPrevoznika"
import { RacunOsiguranja } from "./RacunOsiguranja"
import { Radnik } from "./Radnik"
import { StavkaRacuna } from "./StavkaRacunaSaBrutoCenom"

@Entity({name: 'racun_sa_bruto_cenom'})
export class RacunSaBrutoCenom {

    @PrimaryGeneratedColumn()
    readonly brojRacuna: number

    @Column()
    rokPlacanja: Date

    @Column()
    datumIzdavanja: Date

    @Column()
    osnova: string

    @Column()
    ukupnaBrutoCena: number

    @ManyToOne(type => MestoIzdavanja)
    @JoinColumn({referencedColumnName: 'id', name: 'idMestaIzdavanja'})
    mestoIzdavanja: number

    @ManyToOne(type => Korisnik)
    @JoinColumn({referencedColumnName: 'jmbg', name: 'jmbg'})
    korisnik: string

    @ManyToOne(type => NacinPlacanja)
    @JoinColumn({referencedColumnName: 'id', name: 'idNacinaPlacanja'})
    nacinPlacanja: number

    @ManyToOne(type => RacunOsiguranja)
    @JoinColumn({referencedColumnName: 'brojRacuna', name: 'brojRacunaOsiguranja'})
    racunOsiguranja: number

    @ManyToOne(type => Radnik)
    @JoinColumn({referencedColumnName: 'sifraRadnika', name: 'sifraRadnika'})
    radnik: string

    @ManyToOne(type => FakturaHotela)
    @JoinColumn({referencedColumnName: 'brojFakture', name: 'brojFaktureHotela'})
    fakturaHotela: number

    @ManyToOne(type => ProfakturaOdPrevoznika)
    @JoinColumn({referencedColumnName: 'brojProfakture', name: 'brojProfaktureOdPrevoznika'})
    profakturaOdPrevoznika: number

    @OneToMany(() => StavkaRacuna, stavka => stavka.brojRacuna)
    stavke: StavkaRacuna[]

}
