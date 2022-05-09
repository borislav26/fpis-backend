import ObavestenjeOIzvrsenojUplatiPrevozaServiceInterface from "./type";
import { getConnection } from "../../data-source";
import { ObavestenjeOIzvrsenojUplatiPrevoza } from "../../entity/ObavestenjeOIzvrsenojUplatiPrevoza";
import { ObavestenjeOIzvrsenojUplatiPrevozaJSON } from "../../json/ObavestenjeOIzvrsenojUplatiPrevoza";

export class ObavestenjeOIzvrsenojUplatiPrevozaService implements ObavestenjeOIzvrsenojUplatiPrevozaServiceInterface {
    constructor() {
        this.getDatabaseConnection()
    }

    obavestenjeOIzvrsenojUplatiPrevozaRepository 


    getDatabaseConnection = async () => {
       const dataSource =  await getConnection()
       if (dataSource) {
            this.obavestenjeOIzvrsenojUplatiPrevozaRepository = dataSource.getRepository(ObavestenjeOIzvrsenojUplatiPrevoza)
       }
    }

    findAll() { 
        return this.obavestenjeOIzvrsenojUplatiPrevozaRepository.find()
    }

    Save(object: ObavestenjeOIzvrsenojUplatiPrevozaJSON) {
        let obavestenje = new ObavestenjeOIzvrsenojUplatiPrevoza()
        obavestenje.datumObavestenja = object.datumObavestenja
        obavestenje.svrha = object.svrha
        
        return this.obavestenjeOIzvrsenojUplatiPrevozaRepository.save(obavestenje)
    }

    Delete(id: string) {
        return null
    }

    Update(object: ObavestenjeOIzvrsenojUplatiPrevozaJSON) {
        return null
    }
}