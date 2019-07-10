# Dialogflow

Dialogflow is an end-to-end, build-once deploy-everywhere development suite for creating conversational interfaces for websites, mobile applications, popular messaging platforms, and IoT devices.

Natural language understanding recognizes a user’s intent and extracts prebuilt entities such as time, date, and numbers. You can train your agent to identify custom entity types by providing a small dataset of examples.

### Getting started with dialogflow (https://dialogflow.com/docs)

After creating a dialogflow agent. 
1. VersionControl - If you want to share it or use others agent you can simply use  [Export, Import and Restore](https://dialogflow.com/docs/agents/export-import-restore)  .    
2. To use your agent in [WRAP-Catalyst](https://github.com/weathernews/WRAP-Catalyst/tree/prajjwal_chatbot/) : Change the WRAP_APP_ENV variable in files under [env](https://github.com/weathernews/WRAP-Catalyst/tree/prajjwal_chatbot/env) folder to your client access token . 
##### Note - Client access token is in the agent's settings (the gear icon settings next to the agent's name) under the General tab.
3. If you want to create a multilingual agent, go to this [link](https://dialogflow.com/docs/agents/multilingual) .
4. To create some custom response or rich messages use inline editor in [Fulfillment](https://dialogflow.com/docs/fulfillment/configure) .
5. To see logs: open [firebase](https://console.firebase.google.com) --> then 'go to console' --> open your project --> Checkout your console logs under 'Function' section . 
