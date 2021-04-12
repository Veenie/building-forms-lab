import React, { Component } from 'react'
import Band from './src/components/Band'

class BandsContainer extends Component {
  
  renderBand = () => this.props.band.map((band, id) => <Band key={id} text={band} />)
  render() {
    return(
      <div>
        BandsContainer
        {this.renderBand()}
      </div>
    )
  }
}

export default BandsContainer
