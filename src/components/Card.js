import React from 'react';

const Card = (props) => {
	return (
		<div className= 'tc bg-light-purple dib br3 pa3 ma3 dim bw2 shadow-5 pointer'>
			<img alt='robots' src={`https://robohash.org/${props.id}?size=300x300&set=set4`} />
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
	);
}

export default Card;