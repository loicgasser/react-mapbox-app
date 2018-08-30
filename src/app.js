import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore'
import Map from './components/Map'
import 'normalize.css/normalize.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import './styles/styles.scss'

const store = configureStore()

ReactDOM.render(<Map />, document.getElementById('app'))