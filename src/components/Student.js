import React from 'react'

const Student = (props) => {
  return (
    <div>
    <h1>Student: {props.name}</h1>
    <h2>email:{props.email}</h2>
    </div>
    
  )
}

export default Student;