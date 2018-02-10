import React, { Component } from 'react';


class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value
		}
	}

	handleSubmit(e) {
		this.setState({
			value: e.target.value
		})

		this.props.getValue(e.target.value)
	}

  render() {
    return (
      <div>
      	<input 
      		className="search-input"
      		type="text" 
      		placeholder={this.props.value} 
      		onChange={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

export default SearchBar;
