import React, { Component } from 'react';
import BoxLink from '../box-link';
import BoxLinkSmall from '../box-link-sm';
import Title from '../title';



class JournalMain extends Component {
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
                    <BoxLink />
                    <BoxLink />
                    <div className="col-md-4 col-md-offset-3" >
                        <BoxLinkSmall />
                    </div>
                </div>
                <div className="col-md-6" style={{ marginTop: 10 }}>
                    <div className="col-md-5">
                        <BoxLinkSmall />
                        <BoxLinkSmall />
                        <BoxLinkSmall />
                        <BoxLinkSmall />
                        <BoxLinkSmall />
                        <BoxLinkSmall />
                    </div>
                    <div className="col-md-5">
                        <BoxLinkSmall />
                        <BoxLinkSmall />
                        <BoxLinkSmall />
                        <BoxLinkSmall />
                        <BoxLinkSmall />
                        <BoxLinkSmall />
                    </div>
                </div>
            </div>

        )
    }
}

export default JournalMain;