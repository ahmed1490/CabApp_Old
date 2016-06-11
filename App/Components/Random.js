'use strict'

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/RandomStyle'

export default class Random extends React.Component {

  // // Prop type warnings
  // static propTypes = {
  //   someProperty: React.PropTypes.object,
  //   someSetting: React.PropTypes.bool.isRequired
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.container}>
        <Text>Random Component</Text>
      </View>
    )
  }
}
