import { Radnik } from "../../entity/Radnik";
import RadnikServiceInterface from "./type";
import { getConnection } from "../../data-source";
import { RadnikJSON } from "../../json/Radnik";

export class RadnikService implements RadnikServiceInterface {
    constructor() {
        this.getDatabaseConnection()
    }

    radnikRepository 

    getDatabaseConnection = async () => {
       const dataSource =  await getConnection()
       if (dataSource) {
            this.radnikRepository = dataSource.getRepository(Radnik)
       }
    }

    findAll() { 
        return this.radnikRepository.find()
    }

    Save(object: RadnikJSON) {
        let radnik = new Radnik()
        radnik.imePrezime = object.imePrezime
        radnik.sifraRadnika = object.sifraRadnika

        return this.radnikRepository.save(radnik)
    }

    Delete(id: string) {
        return null
    }

    Update(object: RadnikJSON) {
        return null
    }
}