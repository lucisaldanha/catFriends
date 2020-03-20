import React, { Component } from 'react';
import { connect } from 'react-redux'; // importing connect method from react-redux
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { cats } from './lib/cats';
import '../index.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import { setSearchField, requestCats } from '../actions.js'; //importing the redux actions we have, because App.js is a smart component

// mapStateToProps tells which state to listen to(from reducers.js) and send down as props;
// searchField/cats/isPending/error are props in App component;
// We access reducer from store that was created and passed down from index.js;
const mapStateToProps = state => {
	return {
		searchField: state.searchCatsReducer.searchField,
		cats: state.requestCatsReducer.cats,
		isPending: state.requestCatsReducer.isPending,
		error: state.requestCatsReducer.error
	}
};

// mapDispatchtoProps assign the props Actions(from actions.js) to listen to
// and that should be dispatched;
const mapDispatchToProps = (dispatch) => {
	// we listen to the props action setSearchField/requestCats, 
	// then we dispatch action to reducer to change state
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)), //listen to setSearchField action
		onRequestCats: () => dispatch(requestCats())  //listen to requestCats action
	}
};

class App extends Component {
	// state is passed down form store as this.props;
	// We make an asynchronous request to an API, grabbing its users and
	// setting that state to robots(Cats);
	componentDidMount() {
		this.props.onRequestCats(); // connecting this action;
		// console.log('componentDidMount');
	}

	render() {
		const filteredCats = this.props.cats.filter(cat => {
			return cat.name.toLowerCase().includes(this.props.searchField.toLowerCase());
		});

		// console.log('render');
		if (this.props.isPending) {
			return <h1 className='cooltitle'>Loading...</h1>
		} else {
			return (
				<div className='tc'>
					<h1 className='cooltitle'>Cute Cat Friends</h1>
					<SearchBox searchChange = {this.props.onSearchChange} />
					<Scroll>		
							{/* wrapped CardList with Error Boundary component to catch errors  */}
						<ErrorBoundary>
							<CardList cats = {filteredCats} />
						</ErrorBoundary>
					</Scroll>
				</div> 
			);
		}	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);