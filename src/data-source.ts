import "reflect-metadata"
import { DataSource } from "typeorm"
import { Korisnik } from './entity/Korisnik'
import { Radnik } from "./entity/Radnik"
import { ObavestenjeOIzvrsenojUplatiHotela } from "./entity/ObavestenjeOIzvrsenojUplatiHotela"
import { ObavestenjeOIzvrsenojUplatiOsiguranja } from "./entity/ObavestenjeOIzvrsenojUplatiOsiguranja"
import { ObavestenjeOIzvrsenojUplatiPrevoza } from "./entity/ObavestenjeOIzvrsenojUplatiPrevoza"
import { ObavestenjeOSvimIzvrsenimUplatama } from "./entity/ObavestenjeOSvimIzvrsenimUplatama"
import { Grad } from "./entity/Grad"
import { Drzava } from "./entity/Drzava"
import { Adresa } from "./entity/Adresa"
import { PotvrdaRezervacije } from "./entity/PotvrdaRezervacije"
import { ProgramPutovanja } from "./entity/ProgramPutovanja"
import { ProgramiPutovanja } from "./entity/ProgramiPutovanja"
import { ObavestenjeOUzimanjuOsiguranja } from "./entity/ObavestenjeOUzimanjuOsiguranja"
import { Prevoznik } from "./entity/Prevoznik"
import { OvlascenoLicePrevoznika } from "./entity/OvlascenoLicePrevoznika"
import { MestoIzdavanja } from "./entity/MestoIzdavanja"
import { NacinPlacanja } from "./entity/NacinPlacanja"
import { OsiguravajucaKuca } from "./entity/OsiguravajucaKuca"
import { Valuta } from "./entity/Valuta"
import { Model } from "./entity/Model"
import { OvlascenoLiceOsiguravajuceKuce } from "./entity/OvlascenoLiceOsiguravajuceKuce"
import { Hotel } from "./entity/Hotel"
import { UgovorOPrevozu } from "./entity/UgovorOPrevozu"
import { ProfakturaOdPrevoznika } from "./entity/ProfakturaOdPrevoznika"
import { ZahtevZaOsiguranje } from "./entity/ZahtevZaOsiguranje"
import { UgovorOOsiguranju } from "./entity/UgovorOOsiguranju"
import { RacunOsiguranja } from "./entity/RacunOsiguranja"
import { FakturaHotela } from "./entity/FakturaHotela"
import { RacunSaBrutoCenom } from "./entity/RacunSaBrutoCenom"
import { StavkaRacuna } from "./entity/StavkaRacunaSaBrutoCenom"


const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "@Zita2019",
    database: "fpis",
    synchronize: true,
    logging: false,
    entities: [
        Korisnik, 
        Radnik, 
        ObavestenjeOIzvrsenojUplatiHotela, 
        ObavestenjeOIzvrsenojUplatiOsiguranja,
        ObavestenjeOIzvrsenojUplatiPrevoza,
        ObavestenjeOSvimIzvrsenimUplatama,
        Grad,
        Drzava,
        Adresa,
        PotvrdaRezervacije,
        ProgramPutovanja,
        ProgramiPutovanja,
        ObavestenjeOUzimanjuOsiguranja,
        Prevoznik,
        OvlascenoLicePrevoznika,
        MestoIzdavanja,
        NacinPlacanja,
        OsiguravajucaKuca,
        Valuta,
        Model,
        OvlascenoLiceOsiguravajuceKuce,
        Hotel,
        UgovorOPrevozu,
        ProfakturaOdPrevoznika,
        ZahtevZaOsiguranje,
        UgovorOOsiguranju,
        RacunOsiguranja,
        FakturaHotela,
        RacunSaBrutoCenom,
        StavkaRacuna
    ],
    migrations: [],
    subscribers: [],
})


export const getConnection = async () => {
    if (AppDataSource.isInitialized) {
        return AppDataSource
    }
    return await AppDataSource.initialize()
}