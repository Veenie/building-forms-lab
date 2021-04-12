import React, { Component } from 'react'
import Band from '../components/Band'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  
  renderBand = () => this.props.bands.map((band, id) => <Band key={id} text={band} />)
  render() {
    return(
      <div>
        BandsContainer
        {this.renderBand()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer)
