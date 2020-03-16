import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import './header.scss'
import Options from './Options/Options'

export const Header = props => {
  const [isMenuShown, setIsMenuShown] = useState(false)

  const handleClick = () => setIsMenuShown(!isMenuShown)

  return (
    <section className="panel-section panel-header">
      <h2>{props.category.name}</h2>
      <p>Last updated: 16 July</p>
      <button onClick={handleClick}>
        <MenuIcon />
      </button>
        { isMenuShown ? 
          <Options 
            hideMenu = {() => setIsMenuShown(false)}
            category = {props.category}
          /> : null }
    </section>
  )
}