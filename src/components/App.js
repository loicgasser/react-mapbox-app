import React from 'react'
import Map from './Map'
import * as MapboxGLRedux from '@mapbox/mapbox-gl-redux'
import ZoomDisplay from './ZoomDisplay'
import ZoomControl from './ZoomControl'

const ReduxMapControl= MapboxGLRedux.ReduxMapControl
const container = 'mapbox-map'
const control = new ReduxMapControl(container)

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Map control={control} container={container}/>
                <ZoomDisplay />
                <ZoomControl control={control} />
            </div>
        ) 
    }
}