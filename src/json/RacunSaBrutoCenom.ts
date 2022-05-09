import { StavkaRacunaJSON } from "./StavkaRacunaSaBrutoCenom"

export class RacunSaBrutoCenomJSON {
    readonly brojRacuna: number
    rokPlacanja: Date
    datumIzdavanja: Date
    osnova: string
    ukupnaBrutoCena: number
    mestoIzdavanja: number
    korisnik: string
    nacinPlacanja: number
    racunOsiguranja: number
    radnik: string
    fakturaHotela: number
    profakturaOdPrevoznika: number
    stavke: StavkaRacunaJSON[]
}
