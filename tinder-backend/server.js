import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import Cors from 'cors'
//App config
const app = express();
const port = process.env.PORT || 8001
const connectionurl = 'mongodb+srv://admin:<password>@cluster0.fifm9.mongodb.net/tinderdb?retryWrites=true&w=majority'

//middleware
app.use(express.json());
app.use(Cors());

//db config
mongoose.connect(connectionurl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})


//api endpoints
app.get("/", (req,res)=> res.status(200).send('hehe'));


app.post("/tinder/card", (req,res)=>{
    const dbCard = req.body;

    Cards.create(dbCard, (err, data)=>{
        if(err)
        res.status(500).send(err)

        else
        res.status(201).send(data)
    })
});

app.get("/tinder/card", (req,res)=>{
    Cards.find( (err, data)=>{
        if(err)
        res.status(500).send(err)

        else
        res.status(200).send(data)
    })
})

//listner
app.listen(port, () => console.log('hello my pet russian, i have a gift for you') );