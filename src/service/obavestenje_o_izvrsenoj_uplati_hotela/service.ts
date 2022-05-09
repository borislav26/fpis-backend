import ObavestenjeOIzvrsenojUplatiPrevozaHotelaInterface from "./type";
import { getConnection } from "../../data-source";
import { ObavestenjeOIzvrsenojUplatiHotela } from "../../entity/ObavestenjeOIzvrsenojUplatiHotela";
import { ObavestenjeOIzvrsenojUplatiHotelaJSON } from "../../json/ObavestenjeOIzvrsenojUplatiHotela";

export class ObavestenjeOIzvrsenojUplatiHotelaService implements ObavestenjeOIzvrsenojUplatiPrevozaHotelaInterface {
    constructor() {
        this.getDatabaseConnection()
    }

    obavestenjeOIzvrsenojUplatiHotelaRepository 

    getDatabaseConnection = async () => {
       const dataSource =  await getConnection()
       if (dataSource) {
            this.obavestenjeOIzvrsenojUplatiHotelaRepository = dataSource.getRepository(ObavestenjeOIzvrsenojUplatiHotela)
       }
    }

    findAll() { 
        return this.obavestenjeOIzvrsenojUplatiHotelaRepository.find()
    }

    Save(object: ObavestenjeOIzvrsenojUplatiHotelaJSON) {
        let obavestenje = new ObavestenjeOIzvrsenojUplatiHotela()
        obavestenje.datumObavestenja = object.datumObavestenja
        obavestenje.svrha = object.svrha
        
        return this.obavestenjeOIzvrsenojUplatiHotelaRepository.save(obavestenje)
    }
    
    Delete(id: string) {
        return null
    }

    Update(object: ObavestenjeOIzvrsenojUplatiHotelaJSON) {
        return null
    }
}