import React, { Component } from 'react';
import { Doughnut, Bar, Line, Pie, Radar } from 'react-chartjs-2';

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData:{
                labels:['Saved', 'Spent'],
                datasets:[
                    {
                        label:'March',
                        data:[
                            500,
                            1600,
                            
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
                ],
                
            }

        }
    }

    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    width={100}
	                height={50}
                    options={{
                        title:{
                            display: true,
                            text:'Budget',
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

export default BarChart;
