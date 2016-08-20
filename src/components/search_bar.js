import React, { Component } from 'react';
// same thing as .....  const Component = React.Component

// Define a new class called SearchBar and give it access to all of the functionality that React.Component has
class SearchBar extends Component {
	// initializng state in class
	// special function that gets called every time we create a new instance of that class
	// it initializes variables and state (it's setup for the function)
	constructor(props) {
		// when we define a method that's already defined on the parent class, we can call it by calling super
		super(props);
		// initialize state and pass the property we want to record changes on
		this.state = { term: ''};
	}

	// every class must have a render function and return JSX
	render() {
		// onChange is a special property in JS
								// event handler passed as value to onChange property
								// reset the value of state.term (with this.setState) and pass the value of property onChange
		return (
			<div className="search-bar">
				<input
					placeholder="Enter search here"
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);	
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;
