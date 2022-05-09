import { RacunSaBrutoCenom } from "../../entity/RacunSaBrutoCenom"
import { RacunSaBrutoCenomJSON } from "../../json/RacunSaBrutoCenom"
import  CRUDInterface from '../shared/crud'

interface RacunSaBrutoCenomServiceInterface extends CRUDInterface<RacunSaBrutoCenom, RacunSaBrutoCenomJSON>{
}

export default RacunSaBrutoCenomServiceInterface