import { take, select, call } from 'redux-saga/effects'
import R from 'ramda'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'
import UserPositionSaga from './UserPositionSaga';
import JourneyPointsSaga from './JourneyPointsSaga'

export function * makeStartup (api) {
  yield take(Types.STARTUP);

  yield call(UserPositionSaga(api).worker);

  const payload = { position: yield select((state) => state.ui.user_position) };

  yield call(JourneyPointsSaga(api).setJourneyStart, Actions.setJourneyStartInfo(payload));
}

































// function getReverseGeocode(location, stateLocationFn, callback) {
//   // console.log('RNGeocoder', RNGeocoder, location);
//   var position = {
//     lat: location.latitude,
//     lng: location.longitude
//   }

//   RNGeocoder.geocodePosition(position)
//     .then(data => {
//       console.log('geocode Position ', data);
//       const { latitude, longitude } = stateLocationFn();

//       if ( latitude != location.latitude || longitude != location.longitude ) {  //check its not changed again
//         // console.log('skipped updating', location, latitude, longitude);
//         return;
//       }

//       callback({
//           name: data[0].formattedAddress,
//           locality: data[0].locality
//       });
//       console.log('found for:', location, data[0]);
//     })
//     .catch(err => console.log('error with reverse geocode: ', err, position));
// }