import { getConnection } from "../../data-source";
import { MestoIzdavanja } from "../../entity/MestoIzdavanja";
import { MestoIzdavanjaJSON } from "../../json/MestoIzdavanja";
import MestoIzdavanjaServiceInterface from "./type";

export class MestoIzdavanjaService implements MestoIzdavanjaServiceInterface {
    constructor() {
        this.getDatabaseConnection()
    }

    mestoIzdavanjaRepository 

    getDatabaseConnection = async () => {
       const dataSource =  await getConnection()
       if (dataSource) {
            this.mestoIzdavanjaRepository = dataSource.getRepository(MestoIzdavanja)
       }
    }

    findAll() { 
        return this.mestoIzdavanjaRepository.find()
    }

    Save(object: MestoIzdavanjaJSON) {
        let mestoIzdavanja = new MestoIzdavanja()
        
        return this.mestoIzdavanjaRepository.save(mestoIzdavanja)
    }

    Delete(id: string) {
        return null
    }

    Update(object: MestoIzdavanjaJSON) {
        return null
    }
}