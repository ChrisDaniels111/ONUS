import React, { Component } from 'react';
import BoxLink from '../box-link';
import BoxLinkSmall from '../box-link-sm';
import Title from '../title';


class PlannerMain extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <BoxLink />
                    <BoxLink />
                </div>
            </div>

        )
    }
}

export default PlannerMain;