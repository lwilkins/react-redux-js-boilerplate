import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducerMain from './reducers';
import App from './components/App';

const store = createStore(
    reducerMain,
    applyMiddleware(thunkMiddleware),
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
