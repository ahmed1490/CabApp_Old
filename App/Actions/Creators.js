import Types from './Types'

const startup = () => ({ type: Types.STARTUP })

const setUserPosition = (position) => ({ type: Types.SET_USER_POSITION, payload: position })
const userPositionFailed = () => ({ type: Types.USER_POSITION_FAILED })

const setMapRegion = (region) => ({ type: Types.SET_MAP_REGION, payload: region })

const setJourneyStartPosition = (position) => ({ type: Types.SET_JOURNEY_START_POSITION, payload: position })
const setJourneyStartInfo = (placeData) => ({ type: Types.SET_JOURNEY_START_INFO, payload: placeData })
const setJourneyEndPosition = (position) => ({ type: Types.SET_JOURNEY_END_POSITION, payload: position })
const setJourneyEndInfo = (placeData) => ({ type: Types.SET_JOURNEY_END_INFO, payload: placeData })



export default {
  startup,

  setUserPosition,
  userPositionFailed,

  setMapRegion,

  setJourneyStartPosition,
  setJourneyStartInfo,
  setJourneyEndPosition,
  setJourneyEndInfo



  // currentLocation,

  // setStart,
  // setStartPosition
}
