import React, { Component } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default class ChartComponent extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            chart: {
                type: 'area'
            },
            title: {
                text: `${ props.name } Random Data Worldwide Population Distribution by Region`
            },
            xAxis: {
                categories: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                labels: {
                    format: '{value}%'
                },
                title: {
                    enabled: false
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
                split: true
            },
            plotOptions: {
                area: {
                    stacking: 'percent',
                    lineColor: '#ffffff',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#ffffff'
                    },
                    accessibility: {
                        pointDescriptionFormatter: function (point) {
                            function round(x) {
                                return Math.round(x * 100) / 100;
                            }
                            return (point.index + 1) + ', ' + point.category + ', ' +
                                point.y + ' millions, ' + round(point.percentage) + '%, ' +
                                point.series.name;
                        }
                    }
                }
            },
            series: [{
                name: 'Asia',
                data: [502, 635, 809, 947, 1402, 3634, 5268]
            }, {
                name: 'Africa',
                data: [106, 107, 111, 133, 221, 767, 1766]
            }, {
                name: 'Europe',
                data: [163, 203, 276, 408, 547, 729, 628]
            }, {
                name: 'America',
                data: [18, 31, 54, 156, 339, 818, 1201]
            }, {
                name: 'Oceania',
                data: [2, 2, 2, 6, 13, 30, 46]
            }]
          };
    }
    
    componentDidMount(){

         this.updateState();
    }

    componentWillReceiveProps(props){

        this.updateState();
    }

    updateState(){
        let state = { ...{}, ...this.state };
         let chartData = this.props.data;

         state.series[0].data = chartData.data[0]; 
         state.series[1].data = chartData.data[1]; 
         state.series[2].data = chartData.data[2]; 
         state.series[3].data = chartData.data[3]; 
         state.series[4].data = chartData.data[4]; 
    
         state.xAxis.categories = chartData.categories;

         this.setState({...state});
    }

    componentWillUnmount(){

    }

    render() {

        

        return (
            
                <HighchartsReact highcharts={Highcharts} options={{...this.state}} />
           
        )
    }
}
