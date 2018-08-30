import React from 'react'
import Map from './Map'
import ZoomDisplay from './ZoomDisplay'

export default class App extends React.Component {
    render() {
        return (
            <div><Map /><ZoomDisplay /></div>
            //<Map />
        ) 
    }
}