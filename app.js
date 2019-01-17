const express = require ('express')
const morgan = require('morgan')

const { db } = require('./models');

const app = express()

app.use(morgan('dev'))
app.use(express.static('styleSheets')) //express have an access to styleSheet folder

const PORT = 3000;

app.listen (PORT,()=>{
    console.log(`App listening in port ${PORT}`)
})

db.authenticate().
then(() => {
  console.log('connected to the database');
})


