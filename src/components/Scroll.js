import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', height: '500px', border: '2px solid white ', margin: '25px', padding: '15px'}} >
			{props.children}
		</div>
	)
};

export default Scroll;