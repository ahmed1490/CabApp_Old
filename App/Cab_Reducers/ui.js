import Types from '../Cab_Actions/Types';
// import { 
//   SET_MAP_REGION,
//   // SET_POSITION,
//   SET_REGION_UPDATING
// } from '../Old_Actions/location'


// state in Redux
// location: {...}


const initialState = {
    mapRegionDelta: {},
    user_position: {},

    isOptionsVisible: false,
    placeCardVisible: undefined, //'start'/'end'

    cars: [
      {id: 1, latitude: 37.33260575262121, longitude: -122.0307375036871, duration: '3 mins'},
      {id: 2, latitude: 37.33280575262121, longitude: -122.0317375036871, duration: '5 mins'},
      {id: 3, latitude: 37.33340172650372, longitude: -122.0321321962561, duration: '6 mins'}
    ]
};

export default function setLocation(state = initialState, action) {
  // console.log('action reducer', action);
  switch (action.type) {
    case Types.SET_USER_POSITION:
      return {
        ...state,
        user_position: action.payload
      }

    // case Types.SET_MAP_REGION_DELTA:
    case Types.SET_JOURNEY_START:

      return {
        ...state,
        mapRegionDelta: action.payload.mapRegionDelta
      }

    case Types.SET_OPTIONS_VISIBLE:
      return {
        ...state,
        isOptionsVisible: action.payload
      }

    case Types.SET_LOCATION_SELECTION:
      return {
        ...state,
        locationSelection: action.payload
      }

    default:
      return state
  }
}