import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

/**
 * from https://docs.amplify.aws/start/getting-started/data-model/q/integration/react
 * Now that you’ve created and configured a React app and initialized a new Amplify project, 
 * you can add a feature. The first feature you will add is an API.
 * The Amplify CLI supports creating and interacting with two types of API categories: REST and GraphQL.
 * The API you will be creating in this step is a GraphQL API using AWS AppSync (a managed GraphQL service) and the database will be Amazon DynamoDB (a NoSQL database).
 * 
 * Add a GraphQL API to your app and "automatically provision a database" by running the following command from 
 * the root of your application directory: amplify add api
 * 
 */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
