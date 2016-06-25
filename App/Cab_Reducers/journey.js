import Types from '../Cab_Actions/Types';

// import { 
//   SET_START_POSITION,
//   SET_END_POSITION,
//   SET_PLACE_START,
//   SET_PLACE_END,
//   SET_OPTIONS_VISIBLE,
//   SET_LOCATION_SELECTION
// } from '../Old_Actions/journey'


// state in Redux
// journey: {...}

const initialState = {
    startInfo: {},
    endInfo: {},
    startPosition: {},
    endPosition: {}
};

export default function setJourney(state = initialState, action) {
  // console.log('searchign for action in journey reducer', action)
  switch (action.type) {
    case Types.SET_JOURNEY_START_POSITION:
      return {
        ...state,
        startPosition: action.payload
      }

    case Types.SET_JOURNEY_END_POSITION:
      return {
        ...state,
        endPosition: action.payload
      }

    case Types.SET_JOURNEY_START_INFO:
      return {
        ...state,
        startInfo: action.payload
      }

    case Types.SET_JOURNEY_END_INFO:
      return {
        ...state,
        endInfo: action.payload
      }


    default:
      return state
  }
}