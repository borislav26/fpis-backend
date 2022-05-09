import { NacinPlacanjaService } from "../service/nacin_placanja/service"

const express = require('express')
const router = express.Router()
const nacinPlacanjaService = new NacinPlacanjaService()

router.get('/all', async (req, res) => {
    const naciniPlacanja = await nacinPlacanjaService.findAll()
    res.json(naciniPlacanja)
})


module.exports = router