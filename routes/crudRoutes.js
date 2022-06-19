const upload = require('../middlewares/upload')
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
            // console.log(err.name)
            if (err.name === 'CastError'){
                return res.send(false)
            }
            res.status(422).send(err)
        }
        
    })

    app.put('/api/:id', upload.single("photo"), async (req, res) => {
        try {
            console.log('req.file:', req.file)
            console.log('req.body:', req.body)
            if (!req.file){
                delete req.body.photo
            }else{
                req.file.buffer = req.file.buffer.toString('base64')
                req.body.photo = {
                contentType: req.file.mimetype,
                data: Buffer.from(req.file.buffer, 'base64')
            }
            }
            req.body.consoles = req.body.consoles.split(',')
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

    app.post('/api', upload.single("photo"), async (req, res) => {
        
        // console.log('req.body:', req.body)
        // console.log('req.file:', req.file)
        if(req.file){
            //We transfrom the image to an object with content type and buffer
            req.file.buffer = req.file.buffer.toString('base64')
            var photo = {
                contentType: req.file.mimetype,
                data: Buffer.from(req.file.buffer, 'base64')
            }
        }
        req.body.consoles = req.body.consoles.split(',')
        const {name, consoles, year, description} = req.body
        
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
            console.log(err)
            res.status(422).send(err)
        }        
    })

    // app.post('/api', upload.single("photo"), async (req, res) => {
    //     //First we transfrom the image to an object with content type and buffer
    //     let photo = undefined
    //     console.log('req.file:', req.file)
    //     if(req.file){
            // const img = fs.readFileSync(req.file.path)
    //         const encodedImg = img.toString('base64')
    //         photo = {
    //             contentType: req.file.mimetype,
    //             data: Buffer.from(encodedImg, 'base64')
    //         }
    //     }
    //     const {name, consoles, year, description} = req.body
    //     const videogame = new Videogames({
    //         name,
    //         consoles,
    //         year,
    //         description,
    //         photo,
    //     })
    //     try {
    //         const vg = await videogame.save();
    //         res.send(vg)
    //     } catch (err) {
    //         console.log(err)
    //         res.status(422).send(err)
    //     }        
    // })
}