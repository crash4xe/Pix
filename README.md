# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## React Router

In traditional web application routing or navigation between pages is acheived using hyperlinks. We can use the same but it will contradict our Single Page Application principles by requesting new page from server on every hyperlink click.

We can navigate using state and conditional rendering but it gets too complicated to get full fledged navigation behaviour. Hence we can use a very famous react routing library called "React Router". For web applications we can include **react-router-dom** package and for native applications **react-router-native** package.

React Router enables "**client side routing**" which means on link click it allows our app to udpate the URL without making another request to server. Then depending on the URL we can display different components. This makes user experience and react application faster as the browser doesn't have to fetch new page, process CSS and JS and then display it.

#### Implementation

1.  Install the package in our project

        npm install react-router-dom

2.  import all the required components like BrowserRouter, Link, Routes, Route

        import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'

    - BrowserRouter: stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack. We need to wrap our main app component with BrowserRouter to keep track of all the URLs.

    - Link: Link element is very similar to anchor element we can say. This allows our app to update the URL on click.

    - Routes: This element is used to wrap all the Route elements.

    - Route: This element is responsible for rendering UI for respective URL.

## Redux

Redux is state manangment libaray. The main plus point redux is it's **predictibility** which acheived through:

    - store: single source of truth
    - state is read only: Component can't directly change state like component state
    - reducer function: functin responsible for changing state. it takes two parameter current state and action and returns new state.
    - action: action is an object emitted by component through some event and reducer take this action to udpate state.
    - action creators: function that returns an action object is called as action creators

Redux resolved **props drilling**. By using **react-redux** package

#### Implementation

1.  Install the redux package

        npm i redux

2.  Import createStore from redux

        import {createStore} from 'redux'

3.  create store using createStore() where we want to put our store(index.js). It takes one mandatory paramenter a reducer function.

        const store = createStore(reducerFn);

4.  create reducer function:

        const reducerFn = (state, action) => {return state;}
