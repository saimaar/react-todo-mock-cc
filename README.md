This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React ToDo List

## Setup

Run `npm install`

We will be working off a JSON server.

Get the server running with `json-server --watch db.json`

Let's run the app with `npm run start` or `npm start`

## Background

We have a React To Do List. We want the App to manage which ones are Completed and which ones are Incomplete (too lazy to keep track).
We will fetching the list of To Dos from the json server and rendering each onto the page while organizing which ones go in the appropriate category. At the same time, we want to be able to add and remove todos from the list.

Ultimately, we want our App to look something like:

![Image of Finished](images/finishedApp.png)

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

