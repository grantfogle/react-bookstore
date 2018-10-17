import React, { Component } from 'react';


class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                    Copyright @2018
                </a>
            </nav>
        )
    }
}

export default Footer;