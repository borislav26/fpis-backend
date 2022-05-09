import { ObavestenjeOIzvrsenojUplatiOsiguranjaService } from "../service/obavestenje_o_izvrsenoj_uplati_osiguranja/service"

const express = require('express')
const router = express.Router()
const obavestenjeOIzvrsenojUplatiOsiguranjaService = new ObavestenjeOIzvrsenojUplatiOsiguranjaService()

router.get('/all', async (req, res) => {
    const obavestenja = await obavestenjeOIzvrsenojUplatiOsiguranjaService.findAll()
    res.json(obavestenja)
})


module.exports = router