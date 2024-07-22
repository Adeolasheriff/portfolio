import React from 'react'

export default function Service(props) {
  return (
    <div className='bg-secondary text-white p-3'>
      <h5>{props.heading}</h5>
      <p>{props.paragraph}</p>
      <h5>{props.name}</h5>
    </div>
  )
}