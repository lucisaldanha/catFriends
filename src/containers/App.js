import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './lib/robots';
import '../index.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';


class App extends Component {
	constructor () {
		super()
		this.state = {
			robots: [],	
			searchfield: '' 
		}
		this.onSearchChange = this.onSearchChange.bind(this)
		// console.log('constructor');
	}	
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				return response.json();
			})
			.then(users => this.setState({ robots: users}));
		// console.log('componentDidMount');
	}
	onSearchChange = (event) =>{
		this.setState({ searchfield: event.target.value })
	}

	render () {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		// console.log('render');
		if (this.state.robots.length === 0) {
			return <h1 className='cooltitle'>Loading...</h1>
		} else {
			return (
				<div className='tc'>
					<h1 className='cooltitle'>Cute Cat Friends</h1>
					<SearchBox searchChange = {this.onSearchChange} />
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

export default App;