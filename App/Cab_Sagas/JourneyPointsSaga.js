import { takeLatest, delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import R from 'ramda'
import Types from '../Cab_Actions/Types'
import Actions from '../Cab_Actions/Creators'

export default (api) => {

  function * setJourneyInfo(action) {
    action.type === Types.SET_JOURNEY_START ? yield delay(500) : null;

    let { position, placeData } = action.payload;

    if (!placeData) {
      placeData = yield call(reverseCodePlace, position);
    }

    if (!R.isEmpty(placeData)) {
      yield action.type === Types.SET_JOURNEY_START
          ? [ put(Actions.setJourneyStartPosition(position)), put(Actions.setJourneyStartInfo(placeData)) ]
          : [ put(Actions.setJourneyEndPosition(position)), put(Actions.setJourneyEndInfo(placeData)) ];
    }
  }

  function * reverseCodePlace(position) {
    const response = yield call(api.getReverseGeocode, position);
    return response.ok ? response.data : {};
  }

  function * watcher() {
    yield [
      takeLatest(Types.SET_JOURNEY_START, setJourneyInfo),
      takeLatest(Types.SET_JOURNEY_END, setJourneyInfo)
    ]
  }


  return {
    watcher,
    setJourneyInfo,
    reverseCodePlace
  }
}