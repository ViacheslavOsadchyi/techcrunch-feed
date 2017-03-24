import fetch from 'isomorphic-fetch';

export const INVALIDATE_POSTS = "INVALIDATE_POSTS";

export function invalidatePosts (){
	return {
		type: INVALIDATE_POSTS
	}
}

export const REQUEST_POSTS = "REQUEST_POSTS";

function requestPosts (){
	return {
		type: REQUEST_POSTS
	}
}

export const RECEIVE_POSTS = "RECEIVE_POSTS";

function receivePosts (json){
	return {
		type: RECEIVE_POSTS,
		posts: json.articles,
		receivedAt: Date.now()
	}
}

function fetchPosts (){
	return (dispatch)=>{
		dispatch(requestPosts());
		return fetch('https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=6598ffbf19154fdc832b0b9cab403103')
		.then(response=>response.json())
		.then(json=>dispatch(receivePosts(json)));
	}
}

function shouldFetchPosts (state){
	if ( !state.posts.length ){
		return true;
	}
	else if ( state.isFetching ){
		return false;
	}
	else{
		return state.didInvalidate;
	}
}

export function fetchPostsIfNeeded (){
	return (dispatch,getState) => {
		const state = getState();
		if (shouldFetchPosts(state)){
			return dispatch(fetchPosts());
		}
		else{
			return Promise.resolve();
		}
	}
}