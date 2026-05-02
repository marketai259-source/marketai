const express = require('express');
const app = express();
app.use(express.json());

app.get('/webhook', (req, res) => {
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  if (token === 'marketai123') {
    res.send(challenge);
  } else {
    res.sendStatus(403);
  }
});

app.post('/webhook', (req, res) => {
  const body = req.body;
  console.log('הודעה נכנסת:', JSON.stringify(body, null, 2));
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('MarketAi Server Running on port 3000');
});
