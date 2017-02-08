import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/App.jsx';
import Signin from './components/auth/Signin.jsx';
import Signout from './components/auth/Signout.jsx';
import Signup from './components/auth/Signup.jsx';
import PhotosView from './components/PhotosView.jsx';

// import Welcome from './components/Welcome.jsx';
import RequireAuth from './components/auth/RequireAuth.jsx';
import reducers from './reducers';
import  { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

// If we have a token, consider the user to be signed in
if (token) {
  // We need to update application state
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      <IndexRoute component={PhotosView} />
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
        <Route path="photosview" component={RequireAuth(PhotosView)} />
      </Route>
    </Router>
  </Provider>, document.querySelector('.container'));
