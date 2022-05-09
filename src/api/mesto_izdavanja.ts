import { MestoIzdavanjaService } from "../service/mesto_izdavanja/service"

const express = require('express')
const router = express.Router()
const mestoIzdavanjaService = new MestoIzdavanjaService()

router.get('/all', async (req, res) => {
    const mesta = await mestoIzdavanjaService.findAll()
    res.json(mesta)
})


module.exports = router