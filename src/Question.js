import React, {Component} from 'react'
import upvote from './upvote.png';
import downvote from './downvote.png';


class Question extends Component {
  render() {
    return (
      <div className="ga">
      <li className='qns'>
        <h2>{this.props.detail.title}</h2>
        <p> {this.props.detail.description}</p>
        <button className='up'> {this.props.detail.upvotes} upvote! <br/> <img src={upvote} className='votes'/></button>
        <button className='down'> {this.props.detail.downvotes} downvote! <br/><img src={downvote} className='votes' /></button>

      </li>

      </div>
    )
  }
}

export default Question
