import React, { Component } from 'react';
import { Doughnut, Bar, Line, Pie, Radar } from 'react-chartjs-2';
import Header from './header';

class DoughnutChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData:{
                labels:['Diet', 'Exercise', 'Water', 'Steps'],
                datasets:[
                    {
                        label:'health',
                        data:[
                            2000,
                            400,
                            900,
                            502
                           
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
                <Doughnut
                    data={this.state.chartData}
                    width={100}
	                height={50}
                    options={{
                        title:{
                            display: true,
                            text:'Health',
                            fontSize:25
                        },
                        legend:{
                            display: true,
                            position:'right'
                        },
                    }}
                />
                this is DoughnutChart
            </div>
        )
    }
}

export default DoughnutChart;
