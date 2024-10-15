import express from 'express'
import 'dotenv/config'

const PORT = process.env.PORT;

const app = express();


app.use(express.json())

let teaData = []
let nextId = 1

// Adding a new Tea
app.post('/teas', (req,res)=>{

    const {name, price} = req.body
    const newTea = {id: nextId++, name, price}
    teaData.push(newTea)
    res.status(201).send(newTea)
})
// get all tea
app.get('/teas', (req,res)=>{
    res.status(200).send((teaData))
})

// get a tea with id
app.get('/teas/:id',(req,res) =>{
   const tea =  teaData.find(t => t.id === parseInt(req.params.id))
   if(!tea){
    return res.status(404).send('Tea Not Found!')
   }
   res.status(200).send(tea);
   
})

//delete tea
app.delete('/teas/:id', (req,res)=>{
    const index = teaData.findIndex(t=>t.id === parseInt(req.params.id))
    if(index === -1){
        return res.status(404).send('No Tea Found')
    }
    teaData.splice(index, 1) 
    return res.status(401).send('Deleted')
}) 


app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}...`);
    
})
