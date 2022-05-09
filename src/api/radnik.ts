import { RadnikService } from "../service/radnik/service"

const express = require('express')
const router = express.Router()
const radnikService = new RadnikService()

router.get('/all', async (req, res) => {
    const radnici = await radnikService.findAll()
    res.json(radnici)
})


module.exports = router