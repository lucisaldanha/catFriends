import React from 'react';
import Card from './Card';

const CardList = ( { robots } ) => {
	// if (true) {
	// 	throw new Error('Nooooooo!');
	// } Code used to test ErrorBoundary in development mode.
	return (
		<div className= 'near-white'>
			{
				robots.map((user, i) => {
					return (
						<Card 
							key={i}
							id={robots[i].id} 
							name={robots[i].name} 
							username={robots[i].username} 
							email={robots[i].email}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;