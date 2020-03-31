import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Input } from './ColorFilterForm.style'
import ColorResult from '../ColorResult/ColorResult'

const ColorFilterForm = ({ colors }) => {
  const [colorResult, setColorResult ] = useState(colors)
  
  const handleOnChange = (colors, event) =>{
    event.preventDefault()
    const colorInput = event.target.value
    if(!colorInput){
      return setColorResult(colors)
    }

    if(colors && colors.length > 0 ) {
     const result = colors.filter(color=> {
        return color.hex === colorInput || color.name === colorInput
      })
      setColorResult(result)
    }
  }
  return (
    <>
      <Form>
        <Input 
          type="text"
          name="color"
          onChange={(event) => handleOnChange(colors, event)}
          placeholder="Filter color by name, hex, eg. #fffff"
        />
      </Form>
     <ColorResult colors={colorResult} />
    </>
  )
}


ColorFilterForm.proptype = {
  colors: PropTypes.shape({
    name: PropTypes.string,
    hex: PropTypes.string
  })
}

export default ColorFilterForm