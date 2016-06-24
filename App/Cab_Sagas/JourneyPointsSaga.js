import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import R from 'ramda'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'


export default (api) => {

  function * setJourneyStart(action) {
    // console.log('setJourneyStart***', arguments)
    let { position, placeData } = action.payload;

    if (!placeData) {
      placeData = yield call(reverseCodePlace, position);
      // console.log('placeData after reverse code', placeData)
    }
    
    if (!R.isEmpty(placeData)) {
      yield [ put(Actions.setJourneyStartPosition(position))
            , put(Actions.setJourneyStartInfo(placeData)) ];
    }
  }

  function * setJourneyEnd(action) {
    let { position, placeData } = action.payload;

    if (!placeData) {
      placeData = yield call(reverseCodePlace, position);
    }
    
    if (!R.isEmpty(placeData)) {
      yield [ put(Actions.setJourneyEndPosition(position))
            , put(Actions.setJourneyEndInfo(placeData))]
    }

  }

  function * reverseCodePlace(position) {
    const response = yield call(api.getReverseGeocode, position);
    // console.log('api response', response)
    return response.ok ? response.data : {};
  }

  function * journeyStartWatcher() {
    yield* takeLatest(Types.SET_JOURNEY_START, setJourneyStart);
  }

  function * journeyEndWatcher() {
    yield* takeLatest(Types.SET_JOURNEY_END, setJourneyEnd);
  }

  return {
    journeyStartWatcher,
    journeyEndWatcher,

    setJourneyStart,
    setJourneyEnd
  }
}


