import React, { Component } from 'react';
import Header from './Header'
import Bookshelf from './Bookshelf'
import Footer from './Footer'
import Cart from './Cart'
import './App.css';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      books: [],
      cart: [],
      filteredBookArr: []
    }
  }


  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    this.setState({ books: json })
    this.setState({ filteredBookArr: json })
    console.log(this.state.books)
  }

  addItem = (price, title, author) => {
    this.setState(prevState => (
      {
        cart: prevState.cart.concat({
          id: 1,
          title: title,
          price: price,
          author: author
        })
      }
    ))
  }

  filterArr = (filterVal) => {
    console.log(filterVal)
    let filteredBookArr = this.state.books.filter(item => {
      let author = item.author.toLowerCase();
      let title = item.title.toLowerCase();
      if (author.includes(filterVal) || title.includes(filterVal)) {
        return item;
      }
    });
    // console.log(filteredBookArr);
    this.setState({ filteredBookArr: filteredBookArr })
    // return this.state.filterfilteredBookArr;
  }

  render() {
    console.log(this.state.filteredBookArr);
    return (
      <>
        <Header filterArr={this.filterArr} />
        <div className="container">
          <div className="row">
            <Bookshelf books={this.state.books} addItem={this.addItem} filteredBookArr={this.state.filteredBookArr} />
            <Cart cart={this.state.cart} submitCart={this.submitCart} />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
