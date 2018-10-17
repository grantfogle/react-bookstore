import React, { Component } from 'react';


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                    React Bookstore
                </a>
                <form>
                    <input type="text" placeholder="Filter by author or text" onChange={(e) => {
                        // this.setState({ value: e.target.value });
                        this.props.filterArr(e.target.value);
                    }}></input>
                </form>
            </nav>
        )
    }
}

export default Header;