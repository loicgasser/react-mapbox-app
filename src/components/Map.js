import React from 'react'
import mapboxgl from 'mapbox-gl'

const defaultStyle = 'https://rawgit.com/openmaptiles/klokantech-basic-gl-style/master/style.json'
const defaultKey = 'Og58UhhtiiTaLVlPtPgs'

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
        this.control = props.control
        this.container = props.container
        this.style = props.style ? props.style : defaultStyle
        this.key = props.key ? props.key : defaultKey
    }
    componentDidMount() {
        const url = this.style
        const key = this.key
        const map = new mapboxgl.Map({ container: this.container })
        map.addControl(this.control)
        loadJSON(url, (style) => {
            style.sources.openmaptiles.url = style.sources.openmaptiles.url.replace('{key}', key)
            style.glyphs = style.glyphs.replace('{key}', key)
            map.setStyle(style)
        })
    }
    render() {
        return <div id={this.container}></div>
    }
}