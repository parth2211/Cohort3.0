import React from 'react'
import "../myApp.css"

const Header = (props) => {
  return (
    <div className="header">
        {props.message}
    </div>
  )
}

export default Header