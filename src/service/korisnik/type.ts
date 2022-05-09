import { Korisnik } from "../../entity/Korisnik"
import { KorisnikJSON } from "../../json/Korisnik"
import  CRUDInterface from '../shared/crud'

interface KorisnikServiceInterface extends CRUDInterface<Korisnik, KorisnikJSON>{
}

export default KorisnikServiceInterface