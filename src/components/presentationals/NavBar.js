import React from 'react';

function NavBar ({isFetching,lastUpdated,handleRefreshClick}){
	return (
		<div className="navbar navbar-default">
			<div className="container-fluid">
				<div className="clearfix">
					<ul className="nav navbar-nav navbar-left">
						{lastUpdated &&
							<li>
								<a className="lastUpdated">
									Last updated at: {new Date(lastUpdated).toLocaleTimeString()}
								</a>
							</li>
						}
					</ul>
					<ul  className="nav navbar-nav pull-right">
						{!isFetching &&							<li>
								<span className="refreshFeed btn btn-default navbar-btn" onClick={handleRefreshClick}>
									Refresh&nbsp;<small><i className="glyphicon glyphicon-refresh"></i></small>
								</span>
							</li>
						}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default NavBar;