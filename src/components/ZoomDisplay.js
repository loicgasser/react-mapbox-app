import React from 'react'
import { connect } from 'react-redux'

const ZoomDisplay = (props) => (
    <div className="zoom-display">{props.zoom}</div>
)

const mapStateToProps = (state) => {
    return {
        zoom: state.zoom
    }
}

export default connect(mapStateToProps)(ZoomDisplay)