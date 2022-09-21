const express = require('express')
const app = express()
const db = require('./database.js')



app.get('/', function(req, res) {
  res.send('Hello World')
})

app.get('/api/cows', function(req, res) {
  /*
  intention:
  request body: none
  side effects: none
  response: [{name: 'Buttercup', description: '...'}, {name: 'Daisy', description: '...'}]
  */
  db.getAll()
    .then(result => res.status(200).send(result))
    .catch(err => res.status(500).send(err));
//   return new Promise((resolve, reject) => {
//     db.getAll()
//     .then((data) => {
//       console.log("response from db: ");
//       console.log(data)
//     })
//   })
//  res.send(`TODO: get request to db`)
})

app.post('/api/cows', (req, res) => {
  /*
  intention: create new cow data
  request body: {name: 'Milkshake', description: '...'}
  side effects: creates new record in database
  response: on success, new record in database
  */
  // convert req.body into a cow
  // then db.createOne(cow)
  let cow = req.body ? req.body : {name: 'Moodzs', description: `An extra family of cows`};
  // let cow = {name: 'Moody', description: `An ornery family of cows`};

  db.createOne(cow)
    .then(result => res.status(201).send(result))
    .catch(err => res.status(500).send(err));
})


app.listen(3000)