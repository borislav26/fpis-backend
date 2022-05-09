import { NacinPlacanja } from "../../entity/NacinPlacanja"
import { NacinPlacanjaJSON } from "../../json/NacinPlacanja"
import  CRUDInterface from '../shared/crud'

interface NacinPlacanjaServiceInterface extends CRUDInterface<NacinPlacanja, NacinPlacanjaJSON>{
}

export default NacinPlacanjaServiceInterface