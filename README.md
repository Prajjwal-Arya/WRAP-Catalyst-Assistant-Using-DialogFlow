# WRAP-Catalyst Assistant Using DialogFlow

## Dialogflow

Dialogflow is an end-to-end, build-once deploy-everywhere development suite for creating conversational interfaces for websites, mobile applications, popular messaging platforms, and IoT devices.

Natural language understanding recognizes a user’s intent and extracts prebuilt entities such as time, date, and numbers. You can train your agent to identify custom entity types by providing a small dataset of examples.

### Getting started with dialogflow (https://dialogflow.com/docs)

### Version Control 
If you want to share it or use others agent you can simply use  [Export, Import and Restore](https://dialogflow.com/docs/agents/export-import-restore)  . 

### To use your agent in [WRAP-Catalyst](https://github.com/weathernews/WRAP-Catalyst/tree/prajjwal_chatbot/)
Change the WRAP_APP_ENV variable in files under [env](https://github.com/weathernews/WRAP-Catalyst/tree/prajjwal_chatbot/env) folder with your client access token . 
##### Note - Client access token is in the agent's settings (the gear icon settings next to the agent's name) under the General tab.
### Multilingual Agent
If you want to create a multilingual agent, go to this [link](https://dialogflow.com/docs/agents/multilingual) .
### Custom Response
To create some custom response or rich messages use inline editor in [Fulfillment](https://dialogflow.com/docs/fulfillment/configure) .
### Logs 
To see logs: open [Firebase](https://console.firebase.google.com) --> then 'go to console' --> open your project --> Checkout your console logs under 'Function' section . 
