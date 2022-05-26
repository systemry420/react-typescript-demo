import React from 'react'
import { ThemeContext } from './Theme'

const Box = () => {
    const theme = React.useContext(ThemeContext)

  return (
    <div style={{ height: '70vh', backgroundColor: theme.primary.bg, color: theme.primary.text}}>
        This is box
    </div>
  )
}

export default Box