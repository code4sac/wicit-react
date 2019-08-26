import { SET_MAP_CENTER, SET_INFO_WINDOW } from '../actions';
import seeddata from '../seeddata';

const initialState = {
    vendors: seeddata.vendorsList,
    mapCenter: JSON.parse(localStorage.getItem("coordinates")) || {
        lat: 38.5816, 
        lng: -121.4944
    },
    selectedVendor: null
};

export const Reducer = (state = initialState, action) => {

    if (action.type === SET_MAP_CENTER) {
        return Object.assign({}, state, {
            mapCenter: action.coordinates
        });
    }

    if (action.type === SET_INFO_WINDOW) {
        return Object.assign({}, state, {
            selectedVendor: action.selectedVendor
        });
    }
    
    return state;
};