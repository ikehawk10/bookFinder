import React, { Component } from 'react';
import axios from 'axios';
import Books from './Components/Books';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import './App.css';


class App extends Component {
	constructor(){
		super();
		this.state = {
			books: [],
			term: "JavaScript"
		}
	}

	componentWillMount() {
		this.getBooks();
	}

	getBooks() {
		let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.term}`
		axios.get(url)
			.then(response => {
				this.setState({
					books: response.data.items
				})
			})
			.catch(error => {
				console.log(error)
			});
	}


	getInput(term) {
		this.setState({term}, () => this.getBooks())
	}

  render() {
    return (
      <div className="container">
      	<Header />
      	<SearchBar 
      		getValue={this.getInput.bind(this)}
      		value={this.state.term} />
      	<Books books={this.state.books}/>

      </div>
    );
  }
}

export default App;
