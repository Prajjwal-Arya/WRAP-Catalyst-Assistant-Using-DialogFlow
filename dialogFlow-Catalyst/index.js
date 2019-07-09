// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
    let data ={
        query: request.body.queryResult.queryText,
        Error: true, 
        intentDisplayName: request.body.queryResult.intent.displayName,
        languageCode: request.body.queryResult.languageCode,
        intentDetectionConfidence: request.body.queryResult.intentDetectionConfidence  
    };
    const dialogflowAgentRef = db.collection('dialogflow').doc(request.body.responseId);
    return db.runTransaction(t => {
    t.set(dialogflowAgentRef, data);
    return Promise.resolve('Write complete');
    }).then(doc => {
    console.log(`Wrote "${data}" to the Firestore database.`);
    }).catch(err => {
    console.log(`Error writing to Firestore: ${err}`);
    console.log(`Failed to write "${data}" to the Firestore database.`);
    });
  }
  function content(agent) {
    agent.add(request.body.queryResult.fulfillmentText);
       let data ={
           query: request.body.queryResult.queryText,
           Error: false, 
           contents: request.body.queryResult.parameters.contents,
           intentDisplayname: request.body.queryResult.intent.displayName,
           languageCode: request.body.queryResult.languageCode,
           intentDetectionConfidence: request.body.queryResult.intentDetectionConfidence  
       };
    const dialogflowAgentRef = db.collection('dialogflow').doc(request.body.responseId);
    return db.runTransaction(t => {
      t.set(dialogflowAgentRef, data);
      return Promise.resolve('Write complete');
    }).then(doc => {
      console.log(`Wrote "${data}" to the Firestore database.`);
    }).catch(err => {
      console.log(`Error writing to Firestore: ${err}`);
      console.log(`Failed to write "${data}" to the Firestore database.`);
    });
  }
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('content', content);
  // intentMap.set('your intent name here', yourFunctionHandler);
  // intentMap.set('your intent name here', googleAssistantHandler);
  agent.handleRequest(intentMap);
});
