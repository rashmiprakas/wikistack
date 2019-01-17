const express = require('express')
const morgan = require('morgan')

const wikiRouter = require ('./routes/wiki') //folder name
const userRouter = require ('./routes/user') //folder name

const models = require('./models'); //folder

const app = express()

app.use(morgan('dev'))
app.use(express.static('styleSheets')) //express have an access to styleSheet folder
app.use('/wiki', wikiRouter);
app.use('/user', userRouter);

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


