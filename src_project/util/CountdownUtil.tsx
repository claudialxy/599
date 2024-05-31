import React, { Component } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
// import CountSownTimer from 'react_native_countdowntimer'
import CountDownReact from './CountDowReact'

export default class CountdownUtil extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <CountDownReact
          data="2024-05-29T00:00:00+00:00"
          days={{ plural: 'Days', singular: 'day' }}
          hours=":"
          mins=":"
          segs=":"
          daysStyle={styles.time}
          hoursStyle={styles.time}
          minsStyle={styles.time}
          secsStyle={styles.time}
          firstColonStyle={styles.colon}
          secondColonStyle={styles.colon}>
          111{' '}
        </CountDownReact>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 20,
  },
  time: {
    fontSize: 12,
  },
  colon: {
    color: '#D3100',
  },
})
