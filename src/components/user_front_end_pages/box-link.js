import React, { Component } from 'react';
import Center from 'react-center';
import Header from './header';

import { Link, Route } from 'react-router-dom';


class BoxLink extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.daysOfWeek = this.daysOfWeek.bind(this)
    }
    daysOfWeek() {
        if (this.props.id == '1') {
            return <Header headerText='Monday' />

        }
        else if (this.props.id == '2') {
            return <Header headerText='Tuesday' />

        }
        else if (this.props.id === '3') {
            return <Header headerText='Wednesday' />

        }
        else if (this.props.id === '4') {
            return <Header headerText='Thursday' />

        }
        else if (this.props.id === '5') {
            return <Header headerText='Friday' />

        }
        else if (this.props.id === '6') {
            return <Header headerText='Saturday' />

        }
        else if (this.props.id === '7') {
            return <Header headerText='Sunday' />
        }

    }
    render() {
        
        return (
            <div className="col-md-2 card" id="boxLinkStyle">
                <Center>
                    <Link to='/day' style={{color: "inherit"}} >
                        <p style={{ margin: 50, fontWeight: 'bold', textDecoration: 'underline' }}>{this.daysOfWeek()}</p>
                    </Link>
                </Center>
            </div>

        )
    }
}

export default BoxLink;