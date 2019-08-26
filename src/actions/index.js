export const SET_MAP_CENTER = "SET_MAP_CENTER";
export const setMapCenter = coordinates => ({
    type: SET_MAP_CENTER,
    coordinates
});

export const SET_INFO_WINDOW = "SET_INFO_WINDOW";
export const setInfoWindow = selectedVendor => ({
    type: SET_INFO_WINDOW,
    selectedVendor
});