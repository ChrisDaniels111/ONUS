import React, { Component } from 'react';
import { Doughnut, Bar, Line, Pie, Radar } from 'react-chartjs-2';

class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData:{
                labels:['Diet', 'Water', 'Exercise', 'Steps', 'Sleep','Meditation','Positivity','Saved','Spent'],
                datasets:[
                    {
                        label:'March',
                        data:[
                            2000,
                            9,
                            8,
                            500,
                            10,
                            4,
                            30,
                            1000,
                            2000
                        ],
                        backgroundColor:[
                            '#69848D',
                            '#DCDED9',
                            '#B3B1B3',
                            '#858D8A',
                            '#757A84',
                            '#DADBDB'
                        ] 
                    }
                ]
                
            }

        }
    }

    render() {
        return (
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    width={100}
	                height={50}
                    options={{
                        title:{
                            display: true,
                            text:'Progress',
                            fontSize:25
                        },
                        legend:{
                            display: true,
                            position:'right'
                        },
                    }}
                />
                
            </div>
        )
    }
}

export default LineChart;
