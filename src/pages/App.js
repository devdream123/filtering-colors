import React, { Component } from 'react'
import axios from 'axios'
import ColorFilterForm from '../components/ColorFilterForm/ColorFilterForm'

class App extends Component { 
  constructor(props){
    super(props);
    this.state = {
      colors: []
    }
  }
  async componentDidMount() {
    try {
      const { data } = await axios.get('colors.json');
      this.setState({colors: data})
    } catch(error) {
      console.info('Unable to fetch data')
      throw error
    }
  }
  render(){
    const { colors } = this.state
    return(
      colors && colors.length > 0 && <ColorFilterForm colors={colors} />
    )
  }
}

export default App