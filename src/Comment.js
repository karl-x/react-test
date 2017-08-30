import React, {Component} from 'react'
import avatar from './ghost.png';

class Comment extends Component
{
  render () {
    return (
      <li>
        <h4> {this.props.title}</h4>
        <small>
        commented by: <img src={avatar} className="avatar" />
             {this.props.user} </small>

      </li>
    )
  }
}

export default Comment
