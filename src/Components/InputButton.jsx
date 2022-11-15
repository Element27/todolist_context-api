import React from 'react'

export const InputButton = ({ handleSubmit }) => {
  return (
    <button className="inputbutton" onClick={handleSubmit}>Add</button>
  )
}

export const UpdateButton = ({ handleSubmit }) => {
  return (
    <button className="updatebutton" onClick={handleSubmit}>Update</button>
  )
}
