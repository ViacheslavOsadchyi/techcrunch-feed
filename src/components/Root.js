import React from 'react';
import {Provider} from 'react-redux';

import store from '../store';
import Feed from './containers/Feed';

function Root (){
	return (
		<div className="container">
			<Provider store={store}>
				<Feed />
			</Provider>
		</div>
	)
}

export default Root;