import { KorisnikService } from "../service/korisnik/service"

const express = require('express')
const router = express.Router()
const korisnikService = new KorisnikService()

router.get('/all', async (req, res) => {
    const korisnici = await korisnikService.findAll()
    res.json(korisnici)
})


module.exports = router