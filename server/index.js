import express from 'express';
import paht from 'path';
import morgan from 'morgan'; // HTTP REQUEST LOGGER
import bodyParser from 'body-parser'; // PARSE HTML BODY
import mongoose from 'mongoose';
import session from 'express-session';

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/' express.static(path.join(__dirname, './../public')));

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => { console.log('Connected to mongodb server'); });
mongoose.connect('mongodb://localhost/bunna');

/* use session */
app.use(session({
    secret: 'bunnaSecret@@',
    resave: false,
    saveUninitialized: true
}));

app.get('/hello', (req, res) => {
    return res.send('Hello CodeLab');
});

app.listen(port, () => {
    console.log('Express is listening on port', port);
});
