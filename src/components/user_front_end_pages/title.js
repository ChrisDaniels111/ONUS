import React, { Component } from 'react';
class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <p id="title">{this.props.titleText} {this.props.userName}</p>
            </div>
         )
    }
}
 
export default Title;