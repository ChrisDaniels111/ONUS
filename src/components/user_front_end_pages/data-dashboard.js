import React, { Component } from 'react';
import DoughnutChart from './doughnut-chart';
import LineChart from './line-chart';
import BarChart from './bar-chart';

class DataDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="col-md-4">
                        <DoughnutChart />
                    </div>
                    <div className="col-md-4">
                        <BarChart />
                    </div>
                    <div className="col-md-4">
                        <DoughnutChart />
                    </div>
                </div>
                <div className="row" style={{marginTop: 10}}>
                    <div className="col-md-10 col-md-offset-1">
                        <LineChart/>
                    </div>
                </div>

            </div>
        )
    }
}

export default DataDashboard;