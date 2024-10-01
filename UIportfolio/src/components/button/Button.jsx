import React from 'react'
import "./button.css"

const Button = ({text,btn}) => {
  return (
    <button className={`btn-style ${btn}`}>{text}</button>
  )
}

export default Button