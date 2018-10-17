import React, { Component } from 'react';

class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    addToCart = (e) => {
        e.preventDefault();
        this.props.addItem(this.props.book.price, this.props.book.title, this.props.book.author)

    }

    render() {
        return (
            <div className="card" style={{ width: 18 + 'rem' }} >
                <div className="card-body">
                    <h5 className="card-title">{this.props.book.title}</h5>
                    <p className="card-text"><b>Author:</b> {this.props.book.author}</p>
                    <p className="card-text">{this.props.book.subtitle}</p>
                    <a href="#" onClick={(e) => this.addToCart(e)}
                        className="btn btn-primary">Add to cart: ${(this.props.book.price).toFixed(2)}</a>
                </div>
            </div>
        )
    }
}

export default Book;