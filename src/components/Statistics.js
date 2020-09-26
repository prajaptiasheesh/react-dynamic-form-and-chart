import React, { Component } from 'react'
import ChartComponent from './charts/ChartComponent'

export default class Statistics extends Component {

    constructor(props){
        super(props);
        let initialData = [502, 635, 809, 947, 1402, 3634, 5268];
        this.state = {
            chartData1: {
                data: [initialData, initialData, initialData, initialData, initialData],
                categories:[]
            },
            chartData2: {
                data: [initialData, initialData, initialData, initialData, initialData],
                categories:[]
            },
            chartData3: {
                data: [initialData, initialData, initialData, initialData, initialData],
                categories:[]
            },
            chartData4: {
                data: [initialData, initialData, initialData, initialData, initialData],
                categories:[]
            },
            years: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'],
            currentYear: new Date().getFullYear()
        }

        this.intervalRef = null;
    }

    componentDidMount(){
        this.setChartData();
    }

    setChartData(){

        this.intervalRef = setInterval(()=>{
            let currentYear = this.state.currentYear+1;
            let years = this.state.years;

            years.shift()
            years.push(currentYear+"");

            this.setDataAndCategories('chartData1', years);
            this.setDataAndCategories('chartData2', years);
            this.setDataAndCategories('chartData3', years);
            this.setDataAndCategories('chartData4', years);
     
            this.setState({ currentYear: currentYear });

        },5000)
    }

    getFiveRandomValues(){

        let data1 = parseInt(Math.random() * 100);
        let data2 = parseInt(Math.random() * 100);
        let data3 = parseInt(Math.random() * 100);
        let data4 = parseInt(Math.random() * 100);
        let data5 = parseInt(Math.random() * 100);

        return [data1, data2, data3, data4, data5];
    }
    setDataAndCategories(key, categories){
        let chartData = this.state[key];
        let values = this.getFiveRandomValues();

        let arr = new Array(...chartData.data[0]);
            arr.shift()
            arr.push(values[0])
            chartData.data[0] = arr;

            arr = new Array(...chartData.data[1]);
            arr.shift()
            arr.push(values[1])
            chartData.data[1] = arr;

            arr = new Array(...chartData.data[2]);
            arr.shift()
            arr.push(values[2])
            chartData.data[2] = arr;

            arr = new Array(...chartData.data[3]);
            arr.shift()
            arr.push(values[3])
            chartData.data[3] = arr;

            arr = new Array(...chartData.data[4]);
            arr.shift()
            arr.push(values[4])
            chartData.data[4] = arr;

            chartData.categories = categories;

            this.setState({
                [key]: chartData
            })

            return chartData;
    }

    componentWillUnmount(){

        clearInterval(this.intervalRef);
    }

    render() {
        return (
            <div>
                Statistics
                <div className="row" >
                    <div className="col-md-6" >
                        <ChartComponent name="Chart 1" data = { this.state.chartData1 } />
                    </div>
                    <div className="col-md-6" >
                        <ChartComponent name="Chart 2" data = { this.state.chartData2 } />
                    </div>
                    <div className="col-md-6" >
                        <ChartComponent name="Chart 3" data = { this.state.chartData3 } />
                    </div>
                    <div className="col-md-6" >
                        <ChartComponent name="Chart 4" data = { this.state.chartData4 } />
                    </div>
                </div>
            </div>
        )
    }
}
