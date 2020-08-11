const express = require('express');
const cors = require('cors');
const functions = require('firebase-functions');
const cluster = require('cluster')
const numCPUs = require('os').cpus().length

const PORT = process.env.PORT || 3001;



//start the express app
const app = express();



//STATIC MIDDLEWARES
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json());
app.use(cors());


app.get('/', (req, res, next) => {
    res.status(200).json({ running: 'login service is running' })
});

app.get('/login', (req, res, next) => {
    res.status(200).json({ running: 'No valid credentials was received' })
});

exports.login = functions.https.onRequest(app);
//app.listen(PORT, () => console.log(`JSP login service running on port ${PORT} with ${numCPUs} CPUs`));