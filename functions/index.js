/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");*/
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')
const stripe = require("stripe")("sk_test_51NORFASANFwudfXiPjPZim4u3wFdJeSh8IXOaAdqQ7tvIlaWqW8hPRiN59bdn16LZBsWlx0Ab6l7725pCkDioPj200LiiUUL6s")

//API

//App config
const app = express();

// Middlewares
app.use(cors({origin:true}))
app.use(express.json())     //to send & pass data in json format
//Api routes
app.get('/', (request,response) => response.status(200).send('hello world'))
app.get('/ab', (request,response) => response.status(200).send('abcdefghi'))

// Import api function
const api = functions.https.onRequest(app);

exports.api;

// Listen Commands
// api() // <-- this line was here before

app.listen(3000, () => {
console.log('Server started!');
});
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
