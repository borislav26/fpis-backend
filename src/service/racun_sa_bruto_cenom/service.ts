import { getConnection } from "../../data-source";
import RacunSaBrutoCenomServiceInterface from "./type";
import { RacunSaBrutoCenom } from "../../entity/RacunSaBrutoCenom";
import { RacunSaBrutoCenomJSON } from "../../json/RacunSaBrutoCenom";
import { NacinPlacanja } from "../../entity/NacinPlacanja";
import { ERROR_CODES, formatFPISError } from "../../error/FPISError";
import { MestoIzdavanja } from "../../entity/MestoIzdavanja";
import { Radnik } from "../../entity/Radnik";
import { StavkaRacuna } from "../../entity/StavkaRacunaSaBrutoCenom";

export class RacunSaBrutoCenomService implements RacunSaBrutoCenomServiceInterface {
    constructor() {
        this.getDatabaseConnection()
    }

    racunSaBrutoCenomRepository
    nacinPlacanjaRepository
    mestoIzdavanjaRepository
    radnikRepository
    stavkaRacunaRepository

    getDatabaseConnection = async () => {
       const dataSource =  await getConnection()
       if (dataSource) {
            this.racunSaBrutoCenomRepository = dataSource.getRepository(RacunSaBrutoCenom)
            this.nacinPlacanjaRepository = dataSource.getRepository(NacinPlacanja)
            this.mestoIzdavanjaRepository = dataSource.getRepository(MestoIzdavanja)
            this.radnikRepository = dataSource.getRepository(Radnik)
            this.stavkaRacunaRepository = dataSource.getRepository(StavkaRacuna)
       }
    }


    findAll() { 
        return this.racunSaBrutoCenomRepository.find({relations: [
            'nacinPlacanja', 
            'mestoIzdavanja',
            'radnik',
            'stavke',
        ]})
    }

    async Save(object: RacunSaBrutoCenomJSON) {
        const dataSource = await getConnection()
        let data
        if (dataSource) {
            data = await dataSource.transaction(async manager => {
                let racunSaBrutoCenom = new RacunSaBrutoCenom()
                const nacinPlacanja = await manager.getRepository(NacinPlacanja).findOneBy({
                    id: object.nacinPlacanja,
                })
                if (nacinPlacanja === null) {
                    return formatFPISError(`Nije moguce pronaci nacin placanja ciji je id = ${object.nacinPlacanja}`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_NACIN_PLACANJA)
                }
                const mestoIzdavanja = await manager.getRepository(MestoIzdavanja).findOneBy({
                    id: object.mestoIzdavanja,
                })
                if (mestoIzdavanja === null) {
                    return formatFPISError(`Nije moguce pronaci mesto izdavanja ciji je id = ${object.mestoIzdavanja}`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_MESTO_IZDAVANJA)
                }
                const radnik = await manager.getRepository(Radnik).findOneBy({
                    sifraRadnika: object.radnik,
                })
                if (radnik === null) {
                    return formatFPISError(`Nije moguce pronaci radnika cija je sifra = ${object.radnik}`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_RADNIKA)
                }
                if (object.stavke.length === 0) {
                    return formatFPISError(`Nije moguce uneti racun bez stavki`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_RADNIKA) 
                }
        
                racunSaBrutoCenom.datumIzdavanja = object.datumIzdavanja
                racunSaBrutoCenom.rokPlacanja = object.rokPlacanja
                racunSaBrutoCenom.osnova = object.osnova
                racunSaBrutoCenom.ukupnaBrutoCena = object.ukupnaBrutoCena
                racunSaBrutoCenom.nacinPlacanja = nacinPlacanja.id
                racunSaBrutoCenom.mestoIzdavanja = mestoIzdavanja.id
                racunSaBrutoCenom.radnik = radnik.sifraRadnika
        
                racunSaBrutoCenom = await manager.getRepository(RacunSaBrutoCenom).save(racunSaBrutoCenom)
        
                for (const stavka of object.stavke) {
                    stavka.brojRacuna = racunSaBrutoCenom.brojRacuna
                    let s
                    s = await manager.getRepository(StavkaRacuna).save(stavka)
                    if (s === null) {
                        return formatFPISError(`Nije moguce uneti stavku racuna`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_RADNIKA)
                    }
                }
        
                return Promise.resolve(racunSaBrutoCenom)
            })
        }
        return data
    }

    async Delete(id: string) {
        return await this.racunSaBrutoCenomRepository.delete({
            brojRacuna: parseInt(id)
        })
    }

    async Update(object: RacunSaBrutoCenomJSON) {
        const dataSource = await getConnection()
        let data
        if (dataSource) {
            data = await dataSource.transaction(async manager => {
                let racunSaBrutoCenom = await manager.getRepository(RacunSaBrutoCenom).find({
                    where: {
                        brojRacuna: object.brojRacuna
                    },
                    relations: ['mestoIzdavanja', 'nacinPlacanja', 'radnik', 'stavke']
                })

                if (racunSaBrutoCenom === null) {
                    return formatFPISError(`Nije moguce pronaci racun sa bruto cenom ciji je broj = ${object.brojRacuna}`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_RACUN_SA_BRUTO_CENOM)
                }
                const nacinPlacanja = await manager.getRepository(NacinPlacanja).findOneBy({
                    id: object.nacinPlacanja,
                })
                if (nacinPlacanja === null) {
                    return formatFPISError(`Nije moguce pronaci nacin placanja ciji je id = ${object.nacinPlacanja}`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_NACIN_PLACANJA)
                }
                const mestoIzdavanja = await manager.getRepository(MestoIzdavanja).findOneBy({
                    id: object.mestoIzdavanja,
                })
                if (mestoIzdavanja === null) {
                    return formatFPISError(`Nije moguce pronaci mesto izdavanja ciji je id = ${object.mestoIzdavanja}`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_MESTO_IZDAVANJA)
                }
                const radnik = await manager.getRepository(Radnik).findOneBy({
                    sifraRadnika: object.radnik,
                })
                if (radnik === null) {
                    return formatFPISError(`Nije moguce pronaci radnika cija je sifra = ${object.radnik}`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_RADNIKA)
                }
                if (object.stavke.length === 0) {
                    return formatFPISError(`Nije moguce uneti racun bez stavki`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_RADNIKA) 
                }
                
                const result = await manager.getRepository(RacunSaBrutoCenom).update({
                    brojRacuna: object.brojRacuna
                }, {
                    datumIzdavanja: object.datumIzdavanja,
                    rokPlacanja: object.rokPlacanja,
                    osnova: object.osnova,
                    ukupnaBrutoCena: object.ukupnaBrutoCena,
                    nacinPlacanja: nacinPlacanja.id,
                    mestoIzdavanja: mestoIzdavanja.id,
                    radnik: radnik.sifraRadnika
                })

                if (result.affected === 0) {
                    return formatFPISError(`Nije moguce izvrsiti izmenu kod racuna sa bruto cenom ciji je brojRacuna = ${object.brojRacuna}`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_RACUN_SA_BRUTO_CENOM)
                }
        
                const trenutneStavke = racunSaBrutoCenom[0].stavke
                
                if (trenutneStavke.length > 0) {
                    for (const s of trenutneStavke) {
                        let stavkaExists = object.stavke.some((el) => el.brojRacuna === s.brojRacuna && el.redniBroj === s.redniBroj)
                        if (!stavkaExists) {
                            let deleteResult = await manager.getRepository(StavkaRacuna).delete({
                                redniBroj: s.redniBroj,
                                brojRacuna: s.brojRacuna
                            })
                            if (deleteResult.affected === 0) {
                                return formatFPISError(`Doslo je do problema prilikom brisanja stavke racuna`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_RADNIKA) 
                            }
                        }
                    }
                }

                for (const stavka of object.stavke) {
                    let s : StavkaRacuna
                    
                    s = await manager.getRepository(StavkaRacuna).findOneBy({
                        redniBroj: stavka.redniBroj,
                        brojRacuna: stavka.brojRacuna
                    })
        
                    if (s === null) {
                        let novaStavka = new StavkaRacuna()
                        novaStavka.brojRacuna = stavka.brojRacuna
                        novaStavka.brutoCena = stavka.brutoCena
                        novaStavka.marza = stavka.marza
                        novaStavka.nazivStavke = stavka.nazivStavke
                        novaStavka.redniBroj = stavka.redniBroj
                        novaStavka.netoCena = stavka.netoCena
                        s = await manager.getRepository(StavkaRacuna).save(novaStavka)
                        if (s === null) {
                            return formatFPISError(`Nije moguce da se sacuva nova stavka racuna`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_RADNIKA)
                        }
                        continue;
                    }
        
                    let sUpdate
                    sUpdate = await manager.getRepository(StavkaRacuna).update({
                        brojRacuna: s.brojRacuna,
                        redniBroj: s.redniBroj
                    }, {
                        marza: stavka.marza,
                        nazivStavke: stavka.nazivStavke,
                        netoCena: stavka.netoCena,
                        brutoCena: stavka.brutoCena
                    })
                    if (sUpdate === null) {
                        return formatFPISError(`Greska prilikom izmene stavke racuna`, ERROR_CODES.ERROR_CODE_NIJE_MOGUCE_NACI_RADNIKA)
                    }
                }
        
                return Promise.resolve(racunSaBrutoCenom[0])
            })
        }
        return Promise.resolve(data)
    }
}