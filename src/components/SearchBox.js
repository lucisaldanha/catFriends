import React from 'react';


const SearchBox = ( {searchChange} ) => {
	return (
		<div className= 'pa2 mw-1'>
			<input 
				className="pa3 ba b--light-purple br2 bg-light-purple near-white" 
				type="search" 
				placeholder='type name of cute kitty friend' 
				onChange= {searchChange}
			/>

		</div>
	);
}
export default SearchBox;