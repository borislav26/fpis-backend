import { ObavestenjeOIzvrsenojUplatiHotelaService } from "../service/obavestenje_o_izvrsenoj_uplati_hotela/service"

const express = require('express')
const router = express.Router()
const obavestenjeOIzvrsenojUplatiHotelaService = new ObavestenjeOIzvrsenojUplatiHotelaService()

router.get('/all', async (req, res) => {
    const obavestenja = await obavestenjeOIzvrsenojUplatiHotelaService.findAll()
    res.json(obavestenja)
})


module.exports = router