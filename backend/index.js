const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000
const axios = require('axios').default;
const bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   });

// // GET request for event data
app.get('/data', function (req, res) {
    axios.get('https://api.gemini.com/v1/pubticker/btcusd')
    .then(data => res.status(200).send(data.data))
    .catch(err => res.send(err));
});

axios.get('https://api.gemini.com/v1/pubticker/btcusd')
.then(data => console.log(data.data))
.catch(err => res.send(err));


app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });