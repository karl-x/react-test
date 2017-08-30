import React, {Component} from 'react'
import Question from './Question'
import Comment from './Comment'
import logo from './unicorn.png';



let questions = [
  {
    title: 'What is react?',
    description: 'Describe something',
    upvotes: 9999,
    downvotes: 2
  },
  {
    title: 'Bonjour!',
    description: 'hakuna matata',
    upvotes: -2000,
    downvotes: 666
  },
]


class Ga extends Component {
  render() {
    let commentList = this.props.post.comments.map(function(comment, index){
      return <Comment title={comment.title} user={comment.user}   key={index} />
    })

    let allQuestions = questions.map(function(q, index){
      return <Question detail={q} key={index} />
    })


    return (
      <div className='ga'>
        <h1>{this.props.info.title}</h1>
        <img src={logo} className="App-logo" alt="log" />
        <p>{this.props.info.description}</p>

        <div className='post'>
          <h2 className='list'>List of posts</h2>
          <strong>Title: </strong>{this.props.post.title} <br/><br/>
          <strong>Author: </strong> {this.props.post.author} <br/><br/>
          <strong>Content: </strong> {this.props.post.body} <br/><br/><br/>
          <strong>Comments: </strong>
            <ul className='comments'>
              { commentList }
            </ul>
        </div>

        <ul className='col'>
          { allQuestions }
        </ul>

      </div>


    )
  }
}

export default Ga
