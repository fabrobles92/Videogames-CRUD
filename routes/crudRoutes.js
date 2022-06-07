const req = require('express/lib/request')
const mongoose = require('mongoose')
const Videogames = mongoose.model('videogames')

module.exports = (app) => {
    app.get('/api', async (req, res) => {
        const videogames = await Videogames.find()
        res.send(videogames)
    })

    app.get('/api/:id', async (req, res) => {
    //    console.log('LLEGO UPDATE REQ', req.params)
        try {
            const videogame = await Videogames.findById(req.params.id)
            res.send(videogame)
        } catch (err) {
            res.status(422).send(err)
        }
        
    })

    app.put('/api/:id', async (req, res) => {
        try {
            
            if (!req.body.photo){
                delete req.body.photo
            }
            const videogame = await Videogames.findByIdAndUpdate(req.params.id, req.body)
            res.send(videogame)
        } catch (err) {
            res.status(422).send(err)
        }
    })

    app.delete('/api/:id', async (req, res) => {
        try {
            const videogame = await Videogames.findByIdAndRemove(req.params.id)
            res.send(videogame)
        } catch (err) {
            res.status(422).send(err)
        }
    })

    app.post('/api', async (req, res) => {
        const {name, consoles, year, description, photo} = req.body
        const videogame = new Videogames({
            name,
            consoles,
            year,
            description,
            photo,
        })
        try {
            const vg = await videogame.save();
            res.send(vg)
        } catch (err) {
            res.status(422).send(err)
        }        
    })
}