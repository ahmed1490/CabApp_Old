import { fork } from 'redux-saga/effects'
import API from '../Cab_Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugSettings from '../Config/DebugSettings'

import { makeStartup } from './StartupSaga'
import JourneyPointsSaga from './JourneyPointsSaga'

// Create our API at this level and feed it into
// the sagas that are expected to make API calls
// so there's only 1 copy app-wide!
// const api = API.create()
const api = DebugSettings.useFixtures ? FixtureAPI : API.create()

// start the daemons
export default function * root () {
  yield fork(makeStartup, api);

  const journeyPoints = JourneyPointsSaga(api);
  yield fork(journeyPoints.journeyStartWatcher);
  yield fork(journeyPoints.journeyEndWatcher);
}


//saga > api
//saga > action/creator > action/types > reducers