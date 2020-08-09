Your-Posts is bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Its a prototype app to demonstrate the workflow process.

## 🧾 How to setup

In the project directory, you can run:

### `yarn install`

Install the libraries and dependencies reuire to run the app. Its a one time process.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## 💻 Technology Stack

- React Hooks
- React-Router
- React-Window (List windowing)
- TypeScript
- Sass
- Material-UI
- Axios
- AWS Amplify (CI/CD)

## Description

This app is fetching all posts and employees data from `https://jsonplaceholder.typicode.com/` and rendering them on UI. Please note that current location (geocode) under Employee details will only work if you have valid API key and is should present in `.env` file as `REACT_APP_LOC_API`.