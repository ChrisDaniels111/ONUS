import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoxLink from '../box-link';
import BoxLinkSmall from '../box-link-sm';
import Title from '../title';
import Header from '../header';
import DataDashboard from '../data-dashboard';




class JournalWeek extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weekDateRange: '3-3-18 - 3-9-18',

        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <Header headerText="Week Of:" />
                    <p>{this.state.weekDateRange}</p>

                </div>

                <div className="row">

                    <BoxLink id="1" />
                    <BoxLink id="2"/>
                    <BoxLink id="3" />
                    <BoxLink id="4" />
                    <BoxLink id="5" />
                    <BoxLink id="6"/>
                    <BoxLink  id="7"/>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <DataDashboard />
                    </div>
                </div>

            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        user: state.user
    }

    console.log (user)
}


export default connect(mapStateToProps)(JournalWeek);