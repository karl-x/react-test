import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Home from './Home'
import About from './About'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className='app-logo' alt='logo' />
          <h2>Welcome to React</h2>
      </div>
      <div className='App-intro'>
      <nav>
        <Link to='/'>Home<Link>
      </nav>
        <Router>
          <div>
            <route path='/' component={Home} />{/* / route */}
            <route path='/about' component={About} />{/* / route */}
          </div>
        </Router>
      </div>
    )
  }
}


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
