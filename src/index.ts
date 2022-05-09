import { getConnection } from "./data-source"
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const radniciRouter = require('./api/radnik')
const korisniciRouter = require('./api/korisnik')
const obavestenjaOIzvrsenimUplatamaPrevoza = require('./api/obavestenje_o_izvrsenoj_uplati_prevoza')
const obavestenjaOIzvrsenimUplatamaOsiguranja = require('./api/obavestenje_o_izvrsenoj_uplati_osiguranja')
const obavestenjaOIzvrsenimUplatamaHotela = require('./api/obavestenje_o_izvrsenoj_uplati_hotela')
const obavestenjaOSvimIzvrsenimUplatama = require('./api/obavestenje_o_svim_izvrsenim_uplatama')
const mestaIzdavanja = require('./api/mesto_izdavanja')
const naciniPlacanja = require('./api/nacin_placanja')
const racuniSaBrutoCenom = require('./api/racun_sa_bruto_cenom')

app.use(bodyParser.json())
app.use(cors())

app.use('/radnici', radniciRouter)
app.use('/korisnici', korisniciRouter)
app.use('/obavestenja-o-izvrsenim-uplatama-prevoza', obavestenjaOIzvrsenimUplatamaPrevoza)
app.use('/obavestenja-o-izvrsenim-uplatama-osiguranja', obavestenjaOIzvrsenimUplatamaOsiguranja)
app.use('/obavestenja-o-izvrsenim-uplatama-hotela', obavestenjaOIzvrsenimUplatamaHotela)
app.use('/obavestenja-o-svim-izvrsenim-uplatama', obavestenjaOSvimIzvrsenimUplatama)
app.use('/mesta-izdavanja', mestaIzdavanja)
app.use('/nacini-placanja', naciniPlacanja)
app.use('/racuni-sa-bruto-cenom', racuniSaBrutoCenom)

getConnection().then(() => {
    console.log("Successfully initialized database connection")
}).catch((err) => {
    console.log('Something went wrong:', err)
})

app.listen(5000, () => {
    console.log('app listen on port 5000')
})