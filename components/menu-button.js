import React, { useEffect } from 'react'

function MenuButton ({ onClick }) {
  const [active, setActive] = React.useState(false)
  const classes = active ? 'active' : '';

  return (
    <button className={`md:hidden absolute top-2 right-4 menu-button ${classes}`} onClick={
      () => {
        setActive(!active)
        onClick()
      }}>
      <span className="bar"></span>
    </button>
  )
}

export default MenuButton