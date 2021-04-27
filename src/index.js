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
 * amplify add api
 * 
 * A type decorated with the @model directive will 
 * - scaffold out the database table for the type (Todo table), 
 * - the schema for CRUD (create, read, update, delete) and list operations, 
 * - and the GraphQL resolvers needed to make everything work together.
 * 
 * amplify push
 * --
 * after running the command I see 
 * - a dynamoDB table created: Todo-7jfbndkihng4bnm75hqffbfhgm-dev
 * - in amplify console, in "backend environments" categories added: API
 * - in appsync console, a new api is created with same name, click into it can see Schema/DataSource/Queries etc
 * 
 * 
 * amplify add auth
 * --
 * after running this several configs under amplfiy/ are updated
 * 
 * amplify push
 * 
 * 
 * 
 * Current Environment: dev
 * 
 * | Category | Resource name           | Operation | Provider plugin   |
 * | -------- | ----------------------- | --------- | ----------------- |
 * | Auth     | reactamplfiedkj07985f76 | Create    | awscloudformation |
 * | Api      | reactamplifiedkjapi1    | No Change | awscloudformation |
 * 
 * after this I can see new categories added in amplify console
 * a new user pool added in cognito console
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
