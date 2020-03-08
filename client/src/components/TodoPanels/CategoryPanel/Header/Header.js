import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import './header.scss'

export const Header = props => {
  return (
    <section className="panel-section panel-header">
      <h2>{props.category.name}</h2>
      <p>Last updated: 16 July</p>
      <button>
        <MenuIcon />
      </button>
    </section>
  )
}