import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <p id="header">{this.props.headerText}</p>
            </div>
         )
    }
}
 
export default Header;