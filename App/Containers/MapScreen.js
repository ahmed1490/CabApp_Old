// An All Components Screen is a great way to dev and quick-test components
import React, { PropTypes } from 'react'
import { View, ScrollView, Text, LayoutAnimation, DeviceEventEmitter } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Cab_Actions/Creators'
// import Routes from '../Navigation/Routes'
// import { Metrics } from '../Themes'

// internal components
import MapBlock from '../Components/map/MapBlock';
import MyLocationBtn from '../Components/map/MyLocationBtn';
import ActionCard from '../Components/actionCard/ActionCard';
import PlacesCard from '../Components/PlacesCard';

import { bindActionCreators } from 'redux'

// import * as LocationActions from '../Old_Actions/location'
// import * as JourneyActions from '../Old_Actions/journey'

import styles from './Styles/MapScreenStyle'
import I18n from '../I18n/I18n.js'


export default class MapScreen extends React.Component {

  static propTypes = {
    navigator: PropTypes.object,
    dispatch: PropTypes.func
  }

  render () {
    // console.log('this.props', this.props)
    const { actions, ui, journey } = this.props;

    return (
      <View style={styles.container}>
        <MapBlock
          cars={ui.cars}
          startPosition={journey.startPosition}

          setStart={actions.setJourneyStart}
        />

        <MyLocationBtn
          setStart={actions.setJourneyStart}
        />

        <ActionCard
          isOptionsVisible={ui.isOptionsVisible}
          start={journey.startInfo}
          end={journey.endInfo}

          setOptionsVisible={/*actions.journey.setOptionsVisible*/()=>{}}
          setLocationSelection={/*actions.journey.setLocationSelection*/()=>{}}
        />
        <PlacesCard
          locationSelection={journey.placeCardVisible}

          setLocationSelection={/*actions.journey.setLocationSelection*/()=>{}}
          setStart={actions.setJourneyStart}
          setEnd={actions.setJourneyEnd}
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  // console.log('LocationActions',LocationActions)
  // console.log('JourneyActions',JourneyActions)
  return {
    actions: bindActionCreators(Actions, dispatch)
  }

  // return {
  //   actions: {
  //     location: bindActionCreators(LocationActions, dispatch),
  //     journey: bindActionCreators(JourneyActions, dispatch)
  //   }
  // }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapScreen)



  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     visibleHeight: Metrics.screenHeight
  //   }
  // }

  // componentWillMount () {
  //   // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
  //   // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
  //   DeviceEventEmitter.addListener('keyboardDidShow', this.keyboardDidShow.bind(this))
  //   DeviceEventEmitter.addListener('keyboardDidHide', this.keyboardDidHide.bind(this))

  //   // Configure nav button
  //   this.props.navigator.state.tapHamburger = () => {
  //     this.props.navigator.drawer.toggle()
  //   }
  // }

  // componentWillUnmount () {
  //   DeviceEventEmitter.removeAllListeners('keyboardDidShow')
  //   DeviceEventEmitter.removeAllListeners('keyboardDidHide')
  // }

  // keyboardDidShow (e) {
  //   // Animation types easeInEaseOut/linear/spring
  //   LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  //   let newSize = Metrics.screenHeight - e.endCoordinates.height
  //   this.setState({
  //     visibleHeight: newSize
  //   })
  // }

  // keyboardDidHide (e) {
  //   // Animation types easeInEaseOut/linear/spring
  //   LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  //   this.setState({
  //     visibleHeight: Metrics.screenHeight
  //   })
  // }