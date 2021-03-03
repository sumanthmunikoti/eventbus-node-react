const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const events = []

app.post('/events', (req, res) => {
  const event = req.body;

  //push all receiving events to the 'events' array
  events.push(event)

  axios.post('http://localhost:4000/events', event);
  axios.post('http://localhost:4001/events', event);
  axios.post('http://localhost:4002/events', event);
  axios.post('http://localhost:4003/events', event);

  res.send({ status: 'OK' });
});

//an endpoint to retrieve all events
app.get('/events', (req, res) => {
  res.send(events)
})

app.listen(4005, () => {
  console.log('Listening on 4005');
});
