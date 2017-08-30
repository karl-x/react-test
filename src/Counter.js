  import React, {Component} from 'react'
  import Enemy from './Enemy'
  import cat2 from './cat2.gif';
  import ReactDOM from 'react-dom';
  import * as V from 'victory';
  import { VictoryLine } from 'victory';
  import { VictoryChart } from 'victory';
  import { VictoryTheme } from 'victory';

  class Counter extends Component {
    constructor (props) {
      super()

      this.state ={
        enemiesArr: []
      }
    }

    render() {
      let allEnemies = this.state.enemiesArr.map((number, index) => {
        return <Enemy key={index} name={number} />
      })

      return (
        <div>
        <ul>{allEnemies}</ul>
        <VictoryChart  theme={VictoryTheme.material} height={200}>
            <VictoryLine

              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc"}
              }}
              animate={{
                  duration: 2000,
                  onLoad: { duration: 1000 }
                }}

              data={[
                { x: 1, y: 2},
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 }
              ]}
            />
        </VictoryChart>
        </div>
      )
    }
  componentDidMount () {
    const url = 'https://www.alphavantage.co/query?function=RSI&symbol=AAPL&interval=daily&time_period=10&series_type=close&apikey=D2E5ZAQU25U0NKAE'

    fetch(url)
      .then((response) => { // promise is resolved, and response is received
        // console.log('response', response)
        return response.json() // convert response.body into json format
      })
      .then((data) => {
        // console.log('data', data) // reads the json
        var obj = data["Technical Analysis: RSI"]
        // console.log(obj)
        // var numbers = []
        for (var prop in obj) {
          // console.log(obj[prop]["RSI"]) //pulls rsi
          this.state.enemiesArr.push(obj[prop]["RSI"])
          this.setState({
            enemiesArr: this.state.enemiesArr
          }) //pulls rsi

        }
        console.log(this.state.enemiesArr);

        // data.map((character, index) => {
        //   if (index < 101) {
        //     console.log(character.name)
        //     this.setState({
        //       enemiesArr: this.state.enemiesArr.concat(character.name)
        //     })
        //   }
        // })
      })
      .catch((err) => {
        console.log('err', err) // just in case if api call fails
      })
  }
}


export default Counter
