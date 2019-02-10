import express from 'express';
import uuid from 'uuid';
import session from 'express-session';
import { default as config } from './config';

// Setup
const app = express();
const port = process.env.PORT || 3000;

app.use(session({
  genid: (req) => {
    console.log('Inside session middleware...');
    console.log(`Your sessionID is: ${req.sessionID}`);
    return uuid();
  },
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: true
}));


// Routes
app.get('/', (req, res) => {
  console.log('Inside route...');
  console.log(`Your sessionID is: ${req.sessionID}`);
  res.send(`You hit the home page!\n`);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
