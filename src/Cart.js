import React, { Component } from 'react';
import Cartitem from './Cartitem'

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    total = (arr) => {
        let sum = 0.00;
        arr.map(item => sum += item.price);
        return sum.toFixed(2);
    }

    render() {
        return (
            <div className="col-lg-4 col-sm-12">
                <div className="list-group">
                    <div className="list-group-item">
                        <div className="row">
                            {/* cards generated from api */}
                            <div className="col-md-6">BookName</div>
                            <div className="col-md-3">Author</div>
                            <div className="col-md-3">Price</div>
                            {/* Generate dynamic table items when added from bookshelf */}
                        </div>
                    </div>

                    {this.props.cart.map((item) => {
                        return <Cartitem item={item} />
                    })}


                </div>
                <div className="list-group-item">
                    <div className="row">
                        {/* cards generated from api */}
                        <div className="col-md-6">Total: ${this.total(this.props.cart)}</div>
                        <div className="col-md-6">
                            <button type="submit" className="btn btn-primary">Checkout</button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Cart;