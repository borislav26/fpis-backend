import { json } from "stream/consumers"
import { ObavestenjeOSvimIzvrsenimUplatama } from "../entity/ObavestenjeOSvimIzvrsenimUplatama"
import { ERROR_CODES, formatFPISError, FPISError } from "../error/FPISError"
import { ObavestenjeOSvimIzvrsenimUplatamaJSON } from "../json/ObavestenjeOSvimIzvrsenimUplatama"
import { ObavestenjeOSvimIzvrsenimUplatamaService } from "../service/obavestenje_o_svim_izvrsenim_uplatama/service"
import { formatResponse, Response } from "./response/Response"

const express = require('express')
const router = express.Router()
const obavestenjeOSvimIzvrsenimUplatamaService = new ObavestenjeOSvimIzvrsenimUplatamaService()

router.get('/all', async (req, res) => {
    const obavestenja = await obavestenjeOSvimIzvrsenimUplatamaService.findAll()
    res.json(obavestenja)
})

router.post('/create', async (req, res) => {
    let response: Response
    const obavestenjeNew = await obavestenjeOSvimIzvrsenimUplatamaService.Save(req.body)
    if (!(obavestenjeNew instanceof ObavestenjeOSvimIzvrsenimUplatama)) {
        response = formatResponse(null, obavestenjeNew)
        res.json(response)
    }
    response = formatResponse(obavestenjeNew, null)
    res.json(response)
})

router.delete('/delete/:id', async (req, res) => {
    let response: Response
    const obavestenjeDelete = await obavestenjeOSvimIzvrsenimUplatamaService.Delete(req.params.id)
    if (obavestenjeDelete.affected === 0) {
        response = formatResponse(null, formatFPISError(`Nije moguce obrisati obavestenje o svim izvrsenim uplatama ciji je id = ${req.params.id}`, ERROR_CODES.ERROR_CODE_GRESKA_PRILIKOM_BRISANJA_OBAVESTENJA_O_SVIM_IZVRSENIM_UPLATAMA))
        res.json(response)
        return
    }
    response = formatResponse({id: req.params.id}, null)
    res.json(response)
})

router.put('/update', async (req, res) => {
    let response: Response
    const obavestenjeNew = await obavestenjeOSvimIzvrsenimUplatamaService.Update(req.body)
    if (!(obavestenjeNew instanceof ObavestenjeOSvimIzvrsenimUplatamaJSON)) {
        response = formatResponse(null, formatFPISError(`Nije moguce izmeniti obavestenje o svim izvrsenim uplatama ciji je id = ${req.body.id}`, ERROR_CODES.ERROR_CODE_GRESKA_PRILIKOM_IZMENE_OBAVESTENJA_O_SVIM_IZVRSENIM_UPLATAMA))
        res.json(response)
        return
    }
    response = formatResponse(obavestenjeNew, null)
    res.json(response)
})

module.exports = router