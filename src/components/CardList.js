import React from 'react';
import Card from './Card';

const CardList = ( { cats } ) => {
	// if (true) {
	// 	throw new Error('Nooooooo!');
	// } Code used to test ErrorBoundary in development mode.
	return (
		<div className= 'near-white'>
			{
				cats.map((user, i) => {
					return (
						<Card 
							key={i}
							id={cats[i].id} 
							name={cats[i].name} 
							username={cats[i].username} 
							email={cats[i].email}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;