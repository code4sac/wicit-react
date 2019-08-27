import { SET_MAP_CENTER } from "../actions";
import seeddata from "../seeddata";

const initialState = {
    vendors: seeddata.vendorsList,
    mapCenter: JSON.parse(localStorage.getItem("coordinates")) || {
        lat: 38.5816,
        lng: -121.4944
    }
};

export const Reducer = (state = initialState, action) => {
    if (action.type === SET_MAP_CENTER) {
        return Object.assign({}, state, {
            mapCenter: action.coordinates
        });
    }
    return state;
};
