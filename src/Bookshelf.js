import React, { Component } from 'react';
import Book from './Book'
import './App.css';


class Bookshelf extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="col-lg-8 col-sm-12">
                <div className="booksRender">
                    {
                        this.props.filteredBookArr.map(book => {
                            return (<Book book={book} addItem={this.props.addItem} />)
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Bookshelf;