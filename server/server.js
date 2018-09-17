const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// const bcrypt = require('bcrypt-nodejs')
var cors = require('cors')

const database = {
  users: [{
    id: '1',
    name: 'pancho',
    email: 'pancho@gmail.com',
    password: 'pancho',
    joined: new Date()
  }]
}
//
app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'))
app.get('./', (req, res) => {
  res.send(database.users);
})

app.post('/signin', (req, res) => {
  var a = JSON.parse(req.body);
  if (a.body.email === database.users[0].email &&
    a.body.password === database.users[0].password) {
    res.send('signed in');
  } else {
    res.status(400).json('access denied');
  }
})

app.listen(3000, () => {
  console.log('Hey im running');
})
