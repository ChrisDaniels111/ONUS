import React, { Component } from 'react';
import Center from 'react-center';
import Header from './header';


class BoxLinkSmall extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="col-md-2"id="boxLinkStyleSmall">
                <Center>
                    <Header/>
                </Center>
            </div>

        )
    }
}

export default BoxLinkSmall;