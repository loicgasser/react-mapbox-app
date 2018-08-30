import * as MapboxGLRedux from '@mapbox/mapbox-gl-redux'
import { createStore, applyMiddleware } from 'redux'
import mapReducer from '../reducers/map'

const mapMiddleware = MapboxGLRedux.mapMiddleware

export default () => {
    const store = createStore(
        mapReducer,
        applyMiddleware(mapMiddleware)
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}