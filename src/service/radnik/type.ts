import { Radnik } from "../../entity/Radnik"
import { RadnikJSON } from '../../json/Radnik'
import  CRUDInterface from '../shared/crud'

interface RadnikServiceInterface extends CRUDInterface<Radnik, RadnikJSON>{
}

export default RadnikServiceInterface