import KorisnikServiceInterface from "./type";
import { getConnection } from "../../data-source";
import { Korisnik } from "../../entity/Korisnik";
import { KorisnikJSON } from "../../json/Korisnik";

export class KorisnikService implements KorisnikServiceInterface {
    constructor() {
        this.getDatabaseConnection()
    }

    korisnikRepository 

    getDatabaseConnection = async () => {
       const dataSource =  await getConnection()
       if (dataSource) {
            this.korisnikRepository = dataSource.getRepository(Korisnik)
       }
    }

    findAll() { 
        return this.korisnikRepository.find()
    }

    Save(object: KorisnikJSON) {
        let korisnik = new Korisnik()
        korisnik.jmbg = object.jmbg
        korisnik.imePrezime = object.imePrezime
        korisnik.adresa = object.adresa
        korisnik.brojPasosa = object.brojPasosa
        korisnik.brojTelefona = object.brojTelefona
        korisnik.datumRodjenja = object.datumRodjenja
        korisnik.obavestenjeOUzimanjuOsiguranja = object.obavestenjeOUzimanjuOsiguranja
        korisnik.programPutovanja = object.programPutovanja
        
        return this.korisnikRepository.save(korisnik)
    }

    Delete(id: string) {
        return null
    }

    Update(object: KorisnikJSON) {
        return null
    }
}