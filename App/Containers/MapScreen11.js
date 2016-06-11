import React, {PropTypes} from 'react'
import {
  View,
  StyleSheet,
  Text,
  PixelRatio,
  Animated
} from 'react-native'
import { connect } from 'react-redux'
import Styles from './Styles/MapScreenStyle'

import Modal from '../libs/react-native-modalbox';

// import GeoInfo from '../components/map/GeoInfo';
import MapBlock from '../map/MapBlock';
import MyLocationBtn from '../map/MyLocationBtn';
import ActionCard from '../actionCard/ActionCard';
import PlacesCard from '../PlacesCard';

import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';

class Home extends React.Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  state = { 
  };

  render() {
    // console.log('Home', this.props)
    const { actions, location, journey } = this.props;
    return (
      <View style={styles.container}>
        <MapBlock
          cars={location.cars}
          startPosition={journey.startPosition}

          setStart={actions.journey.setStart}
        />

        <MyLocationBtn
          setStart={actions.journey.setStart}
        />

        <ActionCard
          isRegionUpdating={location.isRegionUpdating}
          isOptionsVisible={journey.isOptionsVisible}
          start={journey.start}
          end={journey.end}

          setOptionsVisible={actions.journey.setOptionsVisible}
          setLocationSelection={actions.journey.setLocationSelection}
        />
        <PlacesCard
          locationSelection={journey.locationSelection}

          setLocationSelection={actions.journey.setLocationSelection}
          setStart={actions.journey.setStart}
          setEnd={actions.journey.setEnd}
        />
      </View>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  locationIcon: {
    position: 'absolute',
    right: 10,
    backgroundColor: '#fff',
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#E9E9EA',
    bottom: 170,
    padding: 10
  }
});

export default Home;
