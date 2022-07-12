const mongoose = require('mongoose')
const express = require('express')
const app = express()
const path = require('path')
const reMath = require('./mods/testapp')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.listen('5000', ()=>{
   console.log('Puerto 5000')
})
mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
   console.log('conexion abierta')
})
.catch(err=>{
   console.log('Error')
   console.log(err)
})
app.get ('/mates',async (req,res)=>{
  const MAT = await reMath.find({})
  res.render('mates/documento.ejs', { MAT }) 
})
express().get('/mates/news', (req, res)=>{
   res.send('Prueba exitosa')
})
app.get('/mates/:id', async (req, res)=>{
   const {id} = req.params
   const mat = await reMath.findById(id)
   res.render('mates/mathid.ejs', {mat})
}) 
app.post('/mates',async (req, res)=>{
const niu = new reMath(req.body)
await niu.save()
res.redirect('/mates')
})