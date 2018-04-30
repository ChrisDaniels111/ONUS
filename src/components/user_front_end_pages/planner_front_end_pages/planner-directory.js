import React, { Component } from 'react';
import Center from 'react-center';

import Title from '../title';
import PlannerMain from './planner-main';
import PlannerToDo from './planner-to-do'


class PlannerDirectory extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                {/* <div className="col-md-3 col-md-offset-6" style={{ marginRight: 20, marginTop: 50 }}>
                    <Title />
                </div> */}
                <div className="row">
                    <div className="col-md-10 col-md-offset-2">
                        {/* <PlannerMain/> */}
                        <PlannerToDo/>
                    </div>
                </div>

            </div>
        )
    }
}

export default PlannerDirectory