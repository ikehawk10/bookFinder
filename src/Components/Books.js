import React, { Component } from 'react';


class Books extends Component {
  componentWillMount() {
    let bookItem = <h3>Loading...</h3>
  }


  render(props) {
    let bookItem;
    let books = this.props.books || [];
    if (books.length > 0) {
    	bookItem = books.map(book => {
    		let { 
    			title,
    			subtitle,
    			description,
    			pageCount
    		} = book.volumeInfo;
    		let { thumbnail } = book.volumeInfo.imageLinks || <p>No photo available</p>;
    		let { buyLink } = book.saleInfo;
    		let { id } = book;

      	return (
      		<div className="panel panel-primary book-list" key={id}>
    			  <div className="panel-heading">
    			    <h3 className="panel-title">{title}</h3>
    			  </div>
    			  <div className="panel-body">
    			  	<div className="row">
    			  		<div className="col-xs-3 col-md-2">
    			  			<a href={buyLink}><img src={thumbnail} /></a>
    			  		</div>
    			  		<div className="col-xs-9 col-md-10">
    			    		{description}
    			  		</div>
    			  	</div>
    			  </div>
    			</div>
    		)
      }) 
    } else {
      bookItem = <h3>Sorry, no books found!</h3>
    }

      return (
        <div>
        	{bookItem}
        </div>
      );
  }
}

export default Books;
