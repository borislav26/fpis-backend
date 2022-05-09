import ObavestenjeOSvimIzvrsenimUplatamaServiceInterface from "./type";
import { getConnection } from "../../data-source";
import { ObavestenjeOSvimIzvrsenimUplatama } from "../../entity/ObavestenjeOSvimIzvrsenimUplatama";
import { ObavestenjeOSvimIzvrsenimUplatamaJSON } from "../../json/ObavestenjeOSvimIzvrsenimUplatama";
import { Korisnik } from "../../entity/Korisnik";
import { Radnik } from "../../entity/Radnik";
import { ObavestenjeOIzvrsenojUplatiHotela } from "../../entity/ObavestenjeOIzvrsenojUplatiHotela";
import { ObavestenjeOIzvrsenojUplatiPrevoza } from "../../entity/ObavestenjeOIzvrsenojUplatiPrevoza";
import { ObavestenjeOIzvrsenojUplatiOsiguranja } from "../../entity/ObavestenjeOIzvrsenojUplatiOsiguranja";
import { ERROR_CODES, formatFPISError } from "../../error/FPISError";

export class ObavestenjeOSvimIzvrsenimUplatamaService implements ObavestenjeOSvimIzvrsenimUplatamaServiceInterface {
    constructor() {
        this.getDatabaseConnection()
    }

    obavestenjeOSvimIzvrsenimUplatamaRepository
    korisnikRepository
    radnikRepository
    obavestenjeOIzvrsenojUplatiHotelaRepository 
    obavestenjeOIzvrsenojUplatiPrevozaRepository 
    obavestenjeOIzvrsenojUplatiOsiguranjaRepository 

    getDatabaseConnection = async () => {
       const dataSource =  await getConnection()
       if (dataSource) {
            this.obavestenjeOSvimIzvrsenimUplatamaRepository = dataSource.getRepository(ObavestenjeOSvimIzvrsenimUplatama)
            this.korisnikRepository = dataSource.getRepository(Korisnik)
            this.radnikRepository = dataSource.getRepository(Radnik)
            this.obavestenjeOIzvrsenojUplatiHotelaRepository = dataSource.getRepository(ObavestenjeOIzvrsenojUplatiHotela)
            this.obavestenjeOIzvrsenojUplatiPrevozaRepository = dataSource.getRepository(ObavestenjeOIzvrsenojUplatiPrevoza)
            this.obavestenjeOIzvrsenojUplatiOsiguranjaRepository = dataSource.getRepository(ObavestenjeOIzvrsenojUplatiOsiguranja)
       }
    }

    findAll() { 
        return this.obavestenjeOSvimIzvrsenimUplatamaRepository.find({relations: [
            'korisnik', 
            'radnik',
            'obavestenjeOIzvrsenojUplatiHotela',
            'obavestenjeOIzvrsenojUplatiPrevoza',
            'obavestenjeOIzvrsenojUplatiOsiguranja',
        ]})
    }

    async Save(object: ObavestenjeOSvimIzvrsenimUplatamaJSON) {
        const korisnik = await this.korisnikRepository.findOneBy({
            jmbg: object.korisnik,
        })
        if (korisnik === null) {
            return formatFPISError(`Nije moguce pronaci korisnika ciji je id = ${object.korisnik}`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_KORISNIKA)
        }
        const radnik = await this.radnikRepository.findOneBy({
            sifraRadnika: object.radnik
        })
        if (radnik === null) {
            return formatFPISError(`Nije moguce pronaci radnika ciji je id = ${object.radnik}`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_RADNIKA)
        }
        const prevoz = await this.obavestenjeOIzvrsenojUplatiPrevozaRepository.findOneBy({
            id: object.obavestenjeOIzvrsenojUplatiPrevoza
        })
        if (prevoz === null) {
            return formatFPISError(`Nije moguce pronaci obavestenje o izvrsenoj uplati prevoza ciji je id = ${object.korisnik}`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_OBAVESTENJE_O_IZVRSENOJ_UPLATI_PREVOZA)
        }
        const osiguranje = await this.obavestenjeOIzvrsenojUplatiOsiguranjaRepository.findOneBy({
            id: object.obavestenjeOIzvrsenojUplatiOsiguranja
        })
        if (osiguranje === null) {
            return formatFPISError(`Nije moguce pronaci obavestenje o izvrsenoj uplati osiguranja ciji je id = ${object.korisnik}`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_OBAVESTENJE_O_IZVRSENOJ_UPLATI_OSIGURANJA)
        }
        const hotel = await this.obavestenjeOIzvrsenojUplatiHotelaRepository.findOneBy({
            id: object.obavestenjeOIzvrsenojUplatiHotela
        })
        if (hotel === null) {
            return formatFPISError(`Nije moguce pronaci obavestenje o izvrsenoj uplati hotela ciji je id = ${object.obavestenjeOIzvrsenojUplatiHotela}`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_OBAVESTENJE_O_IZVRSENOJ_UPLATI_HOTELA)
        }


        let obavestenjeOsvimIzvrsenimUplatama = new ObavestenjeOSvimIzvrsenimUplatama()
        obavestenjeOsvimIzvrsenimUplatama.radnik = object.radnik
        obavestenjeOsvimIzvrsenimUplatama.korisnik = object.korisnik
        obavestenjeOsvimIzvrsenimUplatama.svrhaObavestenja = object.svrhaObavestenja
        obavestenjeOsvimIzvrsenimUplatama.datumObavestenja = object.datumObavestenja
        obavestenjeOsvimIzvrsenimUplatama.obavestenjeOIzvrsenojUplatiHotela = object.obavestenjeOIzvrsenojUplatiHotela
        obavestenjeOsvimIzvrsenimUplatama.obavestenjeOIzvrsenojUplatiPrevoza = object.obavestenjeOIzvrsenojUplatiPrevoza
        obavestenjeOsvimIzvrsenimUplatama.obavestenjeOIzvrsenojUplatiOsiguranja = object.obavestenjeOIzvrsenojUplatiOsiguranja
        
        const newObavestenje = this.obavestenjeOSvimIzvrsenimUplatamaRepository.save(obavestenjeOsvimIzvrsenimUplatama)
        if (newObavestenje == null) {
            return formatFPISError(`Greska prilikom cuvanja novog obavestenja o svim izvrsenim uplatama`, ERROR_CODES.ERROR_CODE_GRESKA_PRILIKOM_CUVANJA_OBAVESTENJA_O_SVIM_IZVRSENIM_UPLATAMA)
        }
        return newObavestenje
    }

    async Delete(id: string) {
        return await this.obavestenjeOSvimIzvrsenimUplatamaRepository.delete({
            id: parseInt(id)
        })
    }

    async Update(object: ObavestenjeOSvimIzvrsenimUplatamaJSON) {
        let obavestenje = await this.obavestenjeOSvimIzvrsenimUplatamaRepository.findOneBy({
            id: object.id,
        })
        const korisnik = await this.korisnikRepository.findOneBy({
            jmbg: object.korisnik,
        })
        if (korisnik === null) {
            return formatFPISError(`Nije moguce pronaci korisnika ciji je id = ${object.korisnik}`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_KORISNIKA)
        }
        const radnik = await this.radnikRepository.findOneBy({
            sifraRadnika: object.radnik
        })
        if (radnik === null) {
            return formatFPISError(`Nije moguce pronaci radnika ciji je id = ${object.radnik}`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_RADNIKA)
        }
        const prevoz = await this.obavestenjeOIzvrsenojUplatiPrevozaRepository.findOneBy({
            id: object.obavestenjeOIzvrsenojUplatiPrevoza
        })
        if (prevoz === null) {
            return formatFPISError(`Nije moguce pronaci obavestenje o izvrsenoj uplati prevoza ciji je id = ${object.korisnik}`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_OBAVESTENJE_O_IZVRSENOJ_UPLATI_PREVOZA)
        }
        const osiguranje = await this.obavestenjeOIzvrsenojUplatiOsiguranjaRepository.findOneBy({
            id: object.obavestenjeOIzvrsenojUplatiOsiguranja
        })
        if (osiguranje === null) {
            return formatFPISError(`Nije moguce pronaci obavestenje o izvrsenoj uplati osiguranja ciji je id = ${object.korisnik}`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_OBAVESTENJE_O_IZVRSENOJ_UPLATI_OSIGURANJA)
        }
        const hotel = await this.obavestenjeOIzvrsenojUplatiHotelaRepository.findOneBy({
            id: object.obavestenjeOIzvrsenojUplatiHotela
        })
        if (hotel === null) {
            return formatFPISError(`Nije moguce pronaci obavestenje o izvrsenoj uplati hotela ciji je id = ${object.obavestenjeOIzvrsenojUplatiHotela}`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_OBAVESTENJE_O_IZVRSENOJ_UPLATI_HOTELA)
        }
        if (obavestenje === null) {
            return formatFPISError(`Nije moguce pronaci obavestenje o svim izvrsenim uplatama ciji je id = ${object.korisnik}`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_KORISNIKA)
        }

        const updatedObavestenje = await this.obavestenjeOSvimIzvrsenimUplatamaRepository.update({
            id: object.id
        }, {
            radnik: object.radnik,
            korisnik: object.korisnik,
            svrhaObavestenja: object.svrhaObavestenja,
            datumObavestenja: object.datumObavestenja,
            obavestenjeOIzvrsenojUplatiHotela: object.obavestenjeOIzvrsenojUplatiHotela,
            obavestenjeOIzvrsenojUplatiOsiguranja: object.obavestenjeOIzvrsenojUplatiOsiguranja,
            obavestenjeOIzvrsenojUplatiPrevoza: object.obavestenjeOIzvrsenojUplatiPrevoza
        })

        if (updatedObavestenje == null) {
            return formatFPISError(`Greska prilikom izmene obavestenja o svim izvrsenim uplatama`, ERROR_CODES.ERROR_CODE_GRESKA_PRILIKOM_CUVANJA_OBAVESTENJA_O_SVIM_IZVRSENIM_UPLATAMA)
        }
        let returnObject = new ObavestenjeOSvimIzvrsenimUplatamaJSON()
        returnObject.id = object.id
        returnObject.datumObavestenja = object.datumObavestenja
        returnObject.svrhaObavestenja = object.svrhaObavestenja
        returnObject.radnik = object.radnik
        returnObject.korisnik = object.korisnik
        returnObject.obavestenjeOIzvrsenojUplatiHotela = object.obavestenjeOIzvrsenojUplatiHotela
        returnObject.obavestenjeOIzvrsenojUplatiPrevoza = object.obavestenjeOIzvrsenojUplatiPrevoza
        returnObject.obavestenjeOIzvrsenojUplatiOsiguranja = object.obavestenjeOIzvrsenojUplatiOsiguranja

        return Promise.resolve(returnObject)
    }
}