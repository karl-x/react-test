
import './index.css';
import Counter from './Counter.js';
import RSI from './RSI.js';
import Generate from './Generate.js';

import React, {Component} from 'react'
  import ReactDOM from 'react-dom';

  import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
  import registerServiceWorker from './registerServiceWorker';


  class App extends Component {
    constructor(props) {
      super(props)

      this.state = {
        rsi: ''
      }
    }
  	render () {
  		var data = [
        {name: 'Page A', price: 4000, rsi: 2400},
        {name: 'Page B', price: 3000, rsi: 1398, amt: 2210},
        {name: 'Page C', price: 2000, rsi: 9800, amt: 2290},
        {name: 'Page D', price: 2780, rsi: 3908, amt: 2000},
        {name: 'Page E', price: 1890, rsi: 4800, amt: 2181},
        {name: 'Page F', price: 2390, rsi: 3800, amt: 2500},
        {name: 'Page G', price: 3490, rsi: 4300, amt: 2100},
      ]
      return (
        <div>
        <RSI getRSI={(rsi) => this.getRSI(rsi)} />
        <Counter rsi={this.state.rsi} />
        <LineChart width={600} height={300} data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />

        <Line type="monotone" dataKey="rsi" stroke="#8884d8" activeDot={{r: 8}}/>
        <Line type="monotone" dataKey="price" stroke="#82ca9d" />
        </LineChart>
        </div>
      );
    }

    getRSI(rsi) {
      console.log(rsi);
      this.setState({
        rsi
      })
    }
  }



// ReactDOM.render(<RSI getRSI={() => this.getRSI()} />, document.getElementById('root')
// );
ReactDOM.render(<App />, document.getElementById('root3')
);

// ReactDOM.render(<Counter />, document.getElementById('root2')
// );
// ReactDOM.render(<Generate />, document.getElementById('root4')
// );


registerServiceWorker();
