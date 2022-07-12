const mongoose = require('mongoose')

const mathSchema = new mongoose.Schema ({
 nombre: {
    type: String,
    required: true
 },
 estudio: {
    type: String,
    required: true
 },
 activa: {
    type: Boolean,
    Default: true
 }
})

const reMath = mongoose.model('reMath', mathSchema);
module.exports = reMath;

reMath.insertMany([
   {nombre: 'geometria plana',
estudio: 'geometria en el plano euclidiano',
activa: false},
{
   nombre: 'algebra abstracta',
   estudio: 'estructuras algrebraicas' 
},
{nombre: 'analisis complejo',
estudio: 'funciones en el plano complejo'},
{nombre: 'topologia general',
estudio: 'transformaciones y deformaciones de conjuntos'},
{nombre: 'aritmetica',
estudio: 'operaciones básicas',
activa: false}
])