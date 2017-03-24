import React from 'react';
import Article from './Article';

function NewsList ({posts}){
	return (
		<div className="NewsList">
			{posts.map((data,i)=>(<Article key={i} data={data} />))}
		</div>
	);
}

export default NewsList;