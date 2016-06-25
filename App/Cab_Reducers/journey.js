import Types from '../Cab_Actions/Types';

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