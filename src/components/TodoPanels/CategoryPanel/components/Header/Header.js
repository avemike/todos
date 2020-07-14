import React, { useState } from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './header.scss'
import Options from './Options/Options'

export const Header = props => {
  const [isMenuShown, setIsMenuShown] = useState(false)

  const handleClick = () => setIsMenuShown(!isMenuShown)

  return (
    <section className="panel-section panel-header">
      <h2>{props.category.name}</h2>
      <p>Last updated: 14 July</p>
      <button onClick={handleClick}>
        <MoreHorizIcon />
      </button>
        { isMenuShown ? 
          <Options 
            hideMenu = {() => setIsMenuShown(false)}
            category = {props.category}
          /> : null }
    </section>
  )
}