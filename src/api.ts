import express from 'express';
import cors from 'cors';
import path from 'path';

export const app = express();

app.use(cors({ origin: true }));

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));
app.set('public', path.join(__dirname, 'public'))
// Healthcheck endpoint
app.get('/', (req, res) => {
  res.render('index',(err,html) => {
    console.log(html)
  });
});

const api = express.Router();

api.get('/hello', (req, res) => {
  res.status(200).send({ message: 'hello world' });
});

// Version the api
app.use('/api/v1', api);
