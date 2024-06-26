import React, { Component } from 'react'

import { StyleSheet, Text, View } from 'react-native'

class CountDown extends Component {
  static displayName = 'Simple countDown'
  static propTypes = {
    date: Date(),
    // days: PropTypes.objectOf(PropTypes.string),
    hours: '', //PropTypes.String,
    mins: '', //PropTypes.string,
    segs: '', //PropTypes.string,
    // onEnd: PropTypes.func,
  }
  static defaultProps = {
    date: new Date(),
    days: {
      plural: '天',
      singular: '天',
    },
    hours: ':',
    mins: ':',
    segs: ':',
    onEnd: () => {},
  }
  state = {
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  }
  componentDidMount() {
    //console.log(this.props.date);//"2017-03-29T00:00:00+00:00"
    this.interval = setInterval(() => {
      const date = this.getDateData('2024-06-01T00:00:00+00:00')
      if (date) {
        this.setState(date)
      } else {
        this.stop()
        this.props.onEnd()
      }
    }, 1000)
  }
  componentWillMount() {
    const date = this.getDateData('2024-06-01T00:00:00+00:00')
    if (date) {
      this.setState(date)
    }
  }
  componentWillUnmount() {
    this.stop()
  }
  getDateData(endDate) {
    console.log(endDate)
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000
    console.log(Date.parse(new Date(endDate)))
    console.log(Date.parse(new Date()))
    if (diff <= 0) {
      return false
    }

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    }

    if (diff >= 365.25 * 86400) {
      timeLeft.years = Math.floor(diff / (365.25 * 86400))
      diff -= timeLeft.years * 365.25 * 86400
    }
    if (diff >= 86400) {
      timeLeft.days = Math.floor(diff / 86400)
      diff -= timeLeft.days * 86400
    }
    if (diff >= 3600) {
      timeLeft.hours = Math.floor(diff / 3600)
      diff -= timeLeft.hours * 3600
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60)
      diff -= timeLeft.min * 60
    }
    timeLeft.sec = diff
    return timeLeft
  }
  render() {
    const countDown = this.state
    let days
    if (countDown.days === 1) {
      days = this.props.days.singular
    } else {
      days = this.props.days.plural
    }
    return (
      //    <View style={styles.container}>
      //      <Text style={styles.text}>{
      //        ((countDown.days > 0) ? this.leadingZeros(countDown.days)+days:'')
      //        +this.leadingZeros(countDown.hours)
      //        +':'+this.leadingZeros(countDown.min)
      //        +':'+this.leadingZeros(countDown.sec)}</Text>
      //    </View>
      //
      <View style={styles.container}>
        {countDown.days > 0 ? (
          <Text style={styles.defaultTime}>
            {this.leadingZeros(countDown.days) + days}
          </Text>
        ) : null}
        <Text style={styles.defaultTime}>
          {this.leadingZeros(countDown.hours)}
        </Text>
        <Text style={styles.defaultColon}>:</Text>
        <Text style={styles.defaultTime}>
          {this.leadingZeros(countDown.min)}
        </Text>
        <Text style={styles.defaultColon}>:</Text>
        <Text style={styles.defaultTime}>
          {this.leadingZeros(countDown.sec)}
        </Text>
        <Text style={styles.defaultColon}>:</Text>
      </View>
    )
  }
  stop() {
    clearInterval(this.interval)
  }
  leadingZeros(num, length = null) {
    let length_ = length
    let num_ = num
    if (length_ === null) {
      length_ = 2
    }
    num_ = String(num_)
    while (num_.length < length_) {
      num_ = '0' + num_
    }
    return num_
  }
}

const styles = StyleSheet.create({
  cardItemTimeRemainTxt: {
    fontSize: 20,
    color: '#ee394b',
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7,
  },
  container: {
    flexDirection: 'row',
  },
  //时间文字
  defaultTime: {
    paddingHorizontal: 3,
    backgroundColor: 'rgba(85, 85, 85, 1)',
    fontSize: 12,
    color: 'white',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  //冒号
  defaultColon: {
    fontSize: 12,
    color: 'rgba(85, 85, 85, 1)',
  },
})

export default CountDown
