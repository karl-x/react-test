import React from 'react'
const ChangeNameState = (props) => (
  <div>
    <label>
    Type your name:
    <input type='text' onChange={(e) => props.showName(e)} />
    </label>
  </div>
)
export default ChangeNameState
