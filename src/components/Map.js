import React from 'react'
import mapboxgl from 'mapbox-gl'
import * as MapboxGLRedux from '@mapbox/mapbox-gl-redux'

const ReduxMapControl= MapboxGLRedux.ReduxMapControl

const loadJSON = (url, cb) => {
    fetch(url, { mode: 'cors' })
    .then(function (response) {
        return response.json();
    })
    .then(function (body) {
        cb(body)
    })
    .catch(function (e) {
        console.warn(e)
        console.warn(`Can not fetch ${url}`)
    })
}

export default class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            container: props.container ? props.container : 'mapbox-map',
            style: props.style ? props.style : 'https://rawgit.com/openmaptiles/klokantech-basic-gl-style/master/style.json',
            key: props.key ? props.key : 'Og58UhhtiiTaLVlPtPgs'
        }
    }
    componentDidMount() {
        const container = this.state.container
        const url = this.state.style
        const key = this.state.key
        const map = new mapboxgl.Map({ container })
        const control = new ReduxMapControl(container)
        map.addControl(control)

        loadJSON(url, (style) => {
            style.sources.openmaptiles.url = style.sources.openmaptiles.url.replace('{key}', key)
            style.glyphs = style.glyphs.replace('{key}', key)
            map.setStyle(style)
        })
    }
    render() {
        return <div id={this.state.container}></div>
    }
}