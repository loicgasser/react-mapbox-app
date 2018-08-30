import React from 'react'
import { connect } from 'react-redux'

class ZoomControl extends React.Component {
    handleZoomIn = () => {
        this.props.dispatch(this.props.control.MapActionCreators.zoomIn())
    }
    handleZoomOut = () => {
        this.props.dispatch(this.props.control.MapActionCreators.zoomOut())
    }
    render() {
        return (
            <div className="zoom-control">
                <button onClick={this.handleZoomIn} className="zoom-control__button">+</button>
                <button onClick={this.handleZoomOut} className="zoom-control__button">-</button>
            </div>
        )
    }
}

export default connect()(ZoomControl)