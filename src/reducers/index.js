import { SET_MAP_CENTER } from "../actions";
import seeddata from "../seeddata";

const initialState = {
    vendors: seeddata.vendorsList,
    address: "" || JSON.parse(localStorage.getItem("address")),
    mapCenter:
        {
            lat: 38.5816,
            lng: -121.4944
        } || JSON.parse(localStorage.getItem("coordinates"))
};

export const Reducer = (state = initialState, action) => {
    if (action.type === SET_MAP_CENTER) {
        return Object.assign({}, state, {
            mapCenter: action.coordinates,
            address: action.address
        });
    }

    return state;
};
