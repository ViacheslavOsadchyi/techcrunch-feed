import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import rootReducer from './reducers';

const initialState = {
	isFetching: false,
	didInvalidate: false,
	lastUpdated: null,
	posts: []
}

const store = createStore(rootReducer,initialState,applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	));

export default store;
