const fs = require('fs');
const path = require('path');
// const upload = require('../middlewares/multer')
const mongoose = require('mongoose')
const Videogames = mongoose.model('videogames')
const Pictures = mongoose.model('pictures')

// const multer = require("multer")
// const uuidv4 = require('uuidv4')



// const DIR = '/public/';
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, DIR);
//     },
//     filename: (req, file, cb) => {
//         const fileName = file.originalname.toLowerCase().split(' ').join('-');
//         cb(null, uuidv4() + '-' + fileName)
//     }
// });
// var upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//         }
//     }
// });






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
            console.log(err)
            res.status(422).send(err)
        }        
    })

//     app.post('/api/img', upload.single('profileImg'),  (req, res)  => {
//         console.log(req)
//         const url = req.protocol + '://' + req.get('host')
//         const pictures = new Pictures({
//             profileImg: url + '/public/' + req.file.filename
//         })
//         console.log(req.body)
//     }
    
    
    
//     )
}