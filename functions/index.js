const express = require('express');
const cors = require('cors');
const functions = require('firebase-functions');
const cluster = require('cluster')
const numCPUs = require('os').cpus().length

const PORT = process.env.PORT || 3000;



//start the express app
const app = express();



//STATIC MIDDLEWARES
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json());
app.use(cors());


app.get('/', (req, res, next) => {
    res.status(200).json({ running: 'home service is running' })
});


app.get('/home', (req, res, next) => {
    res.status(200).json({ running: "You're in the home tab" })
});

app.get('/about', (req, res, next) => {
    res.status(200).json({ running: "You're in the about tab" })
});


exports.home = functions.https.onRequest(app);
//app.listen(PORT, () => console.log(`JSP Control house running on port ${PORT} with ${numCPUs} CPUs`));