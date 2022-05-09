import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm"
import { Korisnik } from './Korisnik'
import { Radnik } from './Radnik'
import { ObavestenjeOIzvrsenojUplatiHotela } from "./ObavestenjeOIzvrsenojUplatiHotela"
import { ObavestenjeOIzvrsenojUplatiOsiguranja } from "./ObavestenjeOIzvrsenojUplatiOsiguranja"
import { ObavestenjeOIzvrsenojUplatiPrevoza } from "./ObavestenjeOIzvrsenojUplatiPrevoza"

@Entity()
export class ObavestenjeOSvimIzvrsenimUplatama {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    svrhaObavestenja: string

    @Column()
    datumObavestenja: Date

    @ManyToOne(type => Korisnik)
    @JoinColumn({referencedColumnName: 'jmbg', name: 'jmbg'})
    korisnik: string

    @ManyToOne(type => Radnik)
    @JoinColumn({referencedColumnName: 'sifraRadnika', name: 'sifraRadnika'})
    radnik: string

    @ManyToOne(type => ObavestenjeOIzvrsenojUplatiHotela)
    @JoinColumn({referencedColumnName: 'id', name: 'obavestenjeOIzvrsenojUplatiHotelaId'})
    obavestenjeOIzvrsenojUplatiHotela: number

    @ManyToOne(type => ObavestenjeOIzvrsenojUplatiOsiguranja)
    @JoinColumn({referencedColumnName: 'id', name: 'obavestenjeOIzvrsenojUplatiOsiguranjaId'})
    obavestenjeOIzvrsenojUplatiOsiguranja: number

    @ManyToOne(type => ObavestenjeOIzvrsenojUplatiPrevoza)
    @JoinColumn({referencedColumnName: 'id', name: 'obavestenjeOIzvrsenojUplatiPrevozaId'})
    obavestenjeOIzvrsenojUplatiPrevoza: number

}
