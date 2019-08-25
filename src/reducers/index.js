import { } from '../actions';
import seeddata from '../seeddata';

const initialState = {
    vendors: seeddata.vendorsList,
    mapCenter: {
        lat: 38.5816, 
        lng: -121.4944
    }
};

export const Reducer = (state = initialState, action) => {

    return state;
};