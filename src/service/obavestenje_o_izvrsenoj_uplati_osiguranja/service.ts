import ObavestenjeOIzvrsenojUplatiPrevozaOsiguranjaInterface from "./type";
import { getConnection } from "../../data-source";
import { ObavestenjeOIzvrsenojUplatiOsiguranja } from "../../entity/ObavestenjeOIzvrsenojUplatiOsiguranja";
import { ObavestenjeOIzvrsenojUplatiOsiguranjaJSON } from "../../json/ObavestenjeOIzvrsenojUplatiOsiguranja";

export class ObavestenjeOIzvrsenojUplatiOsiguranjaService implements ObavestenjeOIzvrsenojUplatiPrevozaOsiguranjaInterface {
    constructor() {
        this.getDatabaseConnection()
    }

    obavestenjeOIzvrsenojUplatiOsiguranjaRepository 

    getDatabaseConnection = async () => {
       const dataSource =  await getConnection()
       if (dataSource) {
            this.obavestenjeOIzvrsenojUplatiOsiguranjaRepository = dataSource.getRepository(ObavestenjeOIzvrsenojUplatiOsiguranja)
       }
    }

    findAll() { 
        return this.obavestenjeOIzvrsenojUplatiOsiguranjaRepository.find()
    }

    Save(object: ObavestenjeOIzvrsenojUplatiOsiguranjaJSON) {
        let obavestenje = new ObavestenjeOIzvrsenojUplatiOsiguranja()
        obavestenje.datumObavestenja = object.datumObavestenja
        obavestenje.svrha = object.svrha
        
        return this.obavestenjeOIzvrsenojUplatiOsiguranjaRepository.save(obavestenje)
    }

    Delete(id: string) {
        return null
    }

    Update(object: ObavestenjeOIzvrsenojUplatiOsiguranjaJSON) {
        return null
    }
}