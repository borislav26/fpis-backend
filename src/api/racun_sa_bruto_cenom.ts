import { RacunSaBrutoCenom } from "../entity/RacunSaBrutoCenom"
import { ERROR_CODES, formatFPISError } from "../error/FPISError"
import { RacunSaBrutoCenomService } from "../service/racun_sa_bruto_cenom/service"
import { formatResponse, Response } from "./response/Response"

const express = require('express')
const router = express.Router()
const racunSaBrutoCenomService = new RacunSaBrutoCenomService()

router.get('/all', async (req, res) => {
    const racuni = await racunSaBrutoCenomService.findAll()
    res.json(racuni)
})

router.post('/create', async (req, res) => {
    let response: Response
    const racunSaBrutoCenomNew = await racunSaBrutoCenomService.Save(req.body)
    if (!(racunSaBrutoCenomNew instanceof RacunSaBrutoCenom)) {
        response = formatResponse(null, racunSaBrutoCenomNew)
        res.json(response)
        return
    }
    response = formatResponse(racunSaBrutoCenomNew, null)
    res.json(response)
})

router.put('/update', async (req, res) => {
    let response: Response
    const racunSaBrutoCenomNew = await racunSaBrutoCenomService.Update(req.body)
    if (!(racunSaBrutoCenomNew instanceof RacunSaBrutoCenom)) {
        response = formatResponse(null, racunSaBrutoCenomNew)
        res.json(response)
        return
    }
    response = formatResponse(racunSaBrutoCenomNew, null)
    res.json(response)
})

router.delete(`/delete/:brojRacuna`, async (req, res) => {
    console.log('ovde je doslo')
    let response: Response
    const racunSaBrutoCenomDelete = await racunSaBrutoCenomService.Delete(req.params.brojRacuna)
    if (racunSaBrutoCenomDelete.affected === 0) {
        response = formatResponse(null, formatFPISError(`Nije moguce obrisati racun sa bruto cenom ciji je broj = ${req.params.id}`, ERROR_CODES.ERROR_CODE_GRESKA_PRILIKOM_BRISANJA_RACUNA_SA_BRUTO_CENOM))
        res.json(response)
        return
    }
    response = formatResponse({brojRacuna: req.params.brojRacuna}, null)
    res.json(response)
})


module.exports = router