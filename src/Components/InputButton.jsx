import React from 'react'

const InputButton = ({ handleSubmit }) => {
  return (
    <button className='inputbutton' onClick={handleSubmit}>Add</button>
  )
}

export default InputButton