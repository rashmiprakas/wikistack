const express = require('express')
const morgan = require('morgan')

const models = require('./models');

const app = express()

app.use(morgan('dev'))
app.use(express.static('styleSheets')) //express have an access to styleSheet folder

const PORT = 3000;

const init = async () => {
  try {
    await models.db.sync();
    app.listen(PORT, () => {
      console.log(`App listening in port ${PORT}`)
    });
  }
  catch (err) { throw (err) }
}


init();


// db.authenticate()
// .then(() => {
//   console.log('connected to the database');
// })


