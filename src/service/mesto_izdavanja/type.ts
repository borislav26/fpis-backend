import { MestoIzdavanja } from "../../entity/MestoIzdavanja"
import { MestoIzdavanjaJSON } from "../../json/MestoIzdavanja"
import  CRUDInterface from '../shared/crud'

interface MestoIzdavanjaServiceInterface extends CRUDInterface<MestoIzdavanja, MestoIzdavanjaJSON>{
}

export default MestoIzdavanjaServiceInterface