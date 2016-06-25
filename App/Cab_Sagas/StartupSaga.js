import { take, select, call } from 'redux-saga/effects'
import R from 'ramda'
import Types from '../Cab_Actions/Types'
import Actions from '../Cab_Actions/Creators'
import UserPositionSaga from './UserPositionSaga';
import JourneyPointsSaga from './JourneyPointsSaga'

export function * makeStartup (api) {
  yield take(Types.STARTUP);

  yield call(UserPositionSaga(api).worker);

  const position = yield select((state) => state.ui.user_position);
  yield call(JourneyPointsSaga(api).setJourneyInfo, Actions.setJourneyStart(position, undefined));
}