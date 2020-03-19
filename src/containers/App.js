import React, { Component } from 'react';
import { connect } from 'react-redux'; // importing connect method from react-redux
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { cats } from './lib/cats';
import '../index.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import { setSearchField } from '../actions.js'; //importing the redux actions we have, because App.js is a smart component

// mapStateToProps tells what state I need to listen to and send down as props
// searchField is a prop in App component
// We access reducer from store that was created and passed down from index.js
const mapStateToProps = state => {
	return {
		searchField: state.searchField // state.searchCats.searchField gave error
	}
};

// mapDispatchtoProps assign the props that we listen to that are Actions
// and that should be dispatched
const mapDispatchToProps = (dispatch) => {
	// we listen to the props action setSearchField, then we dispatch this action to reducer to change state
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)) 
	}
};

class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
			robots: []
		}
		// console.log('constructor');
	}	

	// We make an asynchronous request to an API, grabbing its users and
	// setting that state to robots(Cats);
	componentDidMount() {
		// console.log(this.props.store.getState()); // testing the store passed down from index.js
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				return response.json();
			})
			.then(users => this.setState({ robots: users}));
		// console.log('componentDidMount');
	}

	render () {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
		});
		// console.log('render');
		if (this.state.robots.length === 0) {
			return <h1 className='cooltitle'>Loading...</h1>
		} else {
			return (
				<div className='tc'>
					<h1 className='cooltitle'>Cute Cat Friends</h1>
					<SearchBox searchChange = {this.props.onSearchChange} />
					<Scroll>		
							{/* wrapped CardList with Error Boundary component to catch errors  */}
						<ErrorBoundary>
							<CardList robots = {filteredRobots} />
						</ErrorBoundary>
					</Scroll>
				</div> 
			);
		}	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);