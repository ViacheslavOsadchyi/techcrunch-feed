import {INVALIDATE_POSTS,REQUEST_POSTS,RECEIVE_POSTS} from './actions';

function rootReducer ( state, action ){
	switch (action.type){
		case INVALIDATE_POSTS:
			return Object.assign({},state,{
				didInvalidate: true
			});
		case REQUEST_POSTS:
			return Object.assign({},state,{
				isFetching: true
			});
		case RECEIVE_POSTS:
			return Object.assign({},state,{
				isFetching: false,
				didInvalidate: false,
				posts: action.posts,
				lastUpdated: action.receivedAt
			});
		default:
			return state;
	}
}

export default rootReducer;