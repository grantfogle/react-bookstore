import React, { Component } from 'react';


class Cartitem extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="list-group-item">
                <div className="row">
                    {/* cards generated from api */}
                    <div className="col-md-6">{this.props.item.title}</div>
                    <div className="col-md-3">{this.props.item.author}</div>
                    <div className="col-md-3">${(this.props.item.price).toFixed(2)}</div>

                </div>
            </div>

        )
    }
}

export default Cartitem;