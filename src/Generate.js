import React, {Component} from 'react'
import Enemy from './Enemy'
import SimpleLinearRegression from 'ml-regression-simple-linear';


class Generate extends Component {
  constructor (props) {
    super(props)

    this.state ={
      name: props.name,
      x: props.x,
      y: props.y
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      x: nextProps.x,
      y: nextProps.y
    })
  }


  render() {
    let regression, slope, toStr, coeff, predict
    if (this.state.x && this.state.y) {
      const priceArrParseInt = this.state.x.map(price => +price)
      const rsiParseInt = this.state.y.map(rsi => +rsi)

      const y = priceArrParseInt;
      const xRSI = rsiParseInt;
      var predictRSI = xRSI[0]
      console.log(xRSI[0], 'here');
      console.log(y);
      regression = new SimpleLinearRegression(xRSI, y);
      slope = regression.slope
      toStr = regression.toString()
      coeff = regression.coefficients
      predict = regression.predict(predictRSI)

    }


    return (
      <div>
      <h2>Slope: {slope}</h2>
      <h2>Equation: {toStr}</h2>
      <h2>{coeff}</h2>
      <h2>{predict}</h2>
      </div>
    )

  }


}



export default Generate
