import React from 'react';

function Article ({data}){
	return (
		<article className="article panel panel-default">
			<div className="panel-heading"><strong>{data.title}</strong></div>
			<div className="panel-body">
				<p>
					{data.description}
				</p>
				<p className="clearfix">
					<a className="btn btn-info pull-right" href={data.url} target="_blank">Read More</a>
				</p>
			</div>
		</article>
	)
}

export default Article;