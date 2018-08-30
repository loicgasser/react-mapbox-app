import * as MapboxGLRedux from '@mapbox/mapbox-gl-redux'
import { createStore, applyMiddleware } from 'redux'

console.log(MapboxGLRedux.MapActionTypes)
const MapActionTypes = MapboxGLRedux.MapActionTypes
const mapMiddleware = MapboxGLRedux.mapMiddleware

const reducer = (state = {}, action) => {
    const map = action.map
    switch (action.type) {
        case MapActionTypes.zoomend:
            console.log(action)
            return {
                zoom: map.getZoom()
            }
        default:
            return state
    }
}

export default () => {
    const store = createStore(
        reducer,
        applyMiddleware(mapMiddleware)
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}