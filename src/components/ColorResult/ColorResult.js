import React from 'react'
import { ColorResultStyled, Color, ColorLabelContainer, ColorLabel } from './ColorResult.style'
import PropTypes from 'prop-types'

const ColorResult = ({ colors }) => {
  if(!colors && colors.length < 1) {
    return null
  }

  return (
    <ColorResultStyled>
      {colors.map((color)=> {
          return(
            <ColorLabelContainer key={color.hex}>
              <Color hex={color.hex} />
              <ColorLabel>{color.name}</ColorLabel>
              <ColorLabel>{color.hex}</ColorLabel>
            </ColorLabelContainer> 
          )
        })}
    </ColorResultStyled>
  )
}

ColorResult.defaultProps = {
  colors: {}
}

ColorResult.proptype = {
  colors: PropTypes.arrayOf({
    name: PropTypes.string,
    hex: PropTypes.string
  })
}

export default ColorResult;