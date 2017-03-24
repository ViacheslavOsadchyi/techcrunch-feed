import React, {Component} from 'react';
import {connect} from 'react-redux';

import {invalidatePosts,fetchPostsIfNeeded} from '../../actions';
import NavBar from '../presentationals/NavBar';
import NewsList from '../presentationals/NewsList';

class Feed extends Component {
	constructor(){
		super();
		this.handleRefreshClick = this.handleRefreshClick.bind(this);
	}
	componentDidMount(){
		const {dispatch} = this.props;
		dispatch(fetchPostsIfNeeded());
	}
	handleRefreshClick(){
		const {dispatch} = this.props;
		dispatch(invalidatePosts());
		dispatch(fetchPostsIfNeeded());
	}
	render(){
		const {isFetching,didInvalidate,posts,lastUpdated} = this.props;
		return(
			<main>
				<NavBar isFetching={isFetching} lastUpdated={lastUpdated} handleRefreshClick={()=>this.handleRefreshClick()} />
				{Boolean(posts.length) &&
					<div className="NewsListWrapper" style={{opacity: didInvalidate ? 0.5 : 1}}>
						<NewsList posts={posts} />
					</div>
				}
			</main>
		);
	}
}

function mapStateToProps (state){
	return{
		isFetching: state.isFetching,
		didInvalidate: state.didInvalidate,
		lastUpdated: state.lastUpdated,
		posts: state.posts
	}
}

export default connect(mapStateToProps)(Feed);