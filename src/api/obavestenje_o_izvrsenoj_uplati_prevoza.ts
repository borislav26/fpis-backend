import { ObavestenjeOIzvrsenojUplatiPrevozaService } from "../service/obavestenje_o_izvrsenoj_uplati_prevoza/service"

const express = require('express')
const router = express.Router()
const obavestenjeOIzvrsenojUplatiPrevozaService = new ObavestenjeOIzvrsenojUplatiPrevozaService()

router.get('/all', async (req, res) => {
    const obavestenja = await obavestenjeOIzvrsenojUplatiPrevozaService.findAll()
    res.json(obavestenja)
})


module.exports = router