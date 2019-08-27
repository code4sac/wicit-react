export const SET_MAP_CENTER = "SET_MAP_CENTER";
export const setMapCenter = (address, coordinates) => ({
    type: SET_MAP_CENTER,
    address,
    coordinates,
});
