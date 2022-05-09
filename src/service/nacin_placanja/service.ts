import { getConnection } from "../../data-source";
import { NacinPlacanja } from "../../entity/NacinPlacanja";
import { NacinPlacanjaJSON } from "../../json/NacinPlacanja";
import NacinPlacanjaServiceInterface from "./type";

export class NacinPlacanjaService implements NacinPlacanjaServiceInterface {
    constructor() {
        this.getDatabaseConnection()
    }

    nacinPlacanjaRepository 

    getDatabaseConnection = async () => {
       const dataSource =  await getConnection()
       if (dataSource) {
            this.nacinPlacanjaRepository = dataSource.getRepository(NacinPlacanja)
       }
    }

    findAll() { 
        return this.nacinPlacanjaRepository.find()
    }

    Save(object: NacinPlacanjaJSON) {
        let nacinPlacanja = new NacinPlacanja()
        
        return this.nacinPlacanjaRepository.save(nacinPlacanja)
    }

    Delete(id: string) {
        return null
    }

    Update(object: NacinPlacanjaJSON) {
        return null
    }
}