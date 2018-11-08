import * as MapboxGLRedux from '@mapbox/mapbox-gl-redux'

const MapActionTypes = MapboxGLRedux.MapActionTypes

export default (state = { zoom: "0.00" }, action) => {
    const map = action.map
    switch (action.type) {
        case MapActionTypes.zoomend:
            return {
                zoom: map.getZoom().toFixed(2)
            }
        default:
            return state
    }
}