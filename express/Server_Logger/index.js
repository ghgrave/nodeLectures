const express = require('express');
const app = express();

const logger = require('morgan')
const chalk = require('chalk')

app.use(logger('dev'))

app.get('/', (req, res)=> {
  console.log(chalk.red('This is the root route'))
  res.send('I am the root route');
})

app.get('/dog', (req, res)=> {
  console.log(chalk.blue('This is the dog route'))
  res.send('I am the dog route');
})

app.get('/cat', (req, res)=> {
  console.log(chalk.red.bgGreenBright('This is the cat route'))
  res.send('I am the cat route');
})

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(chalk.green(`App listening on port ${port}`)))