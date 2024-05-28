import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface stateType {
  title: string;
  imageUrl: string;
}

// interface CustomNavigationParams {
//   levelUrl: string
//   nickname: string
// }

export default class Detail extends Component<any, stateType> {
  constructor(props: any) {
    super(props);
    // this.state = {
    //   title: '',
    //   imageUrl: '.',
    // }
  }

  render() {
    return (
      <View style={styles.containerView}>
        {/* <Text style={styles.title} numberOfLines={2}>
          {' '}
          {this.state.title}{' '}
        </Text> */}
        {/* <Image style={styles.image} source={{ uri: this.state.imageUrl }} /> */}
        <TouchableOpacity
          // style={[styles.navigationButton, { top: topSafeArea }]}
          onPress={() => {
            this.props.navigation.goBack();
            // this.props.navigation.navigate('home');
          }}>
          <Ionicons
            style={{ marginLeft: 5 }}
            name="chevron-back-outline"
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('CheckConfirm');
          }}>
          <Text style={styles.title}> {'跳转按钮'} </Text>
        </TouchableOpacity>
      </View>
    );
  }

  // componentDidMount = () => {
  //   const item = this.props.route.params
  //   this.setState({
  //     title: item.title,
  //     imageUrl: item.imageUrl,
  //   })
  //   this.props.navigation.setOptions({
  //     header: () => {
  //       return (
  //         <CustomNavigation levelUrl={item.levelUrl} nickname={item.nickname} />
  //       )
  //     },
  //   })
  // }
}

// const CustomNavigation = (props: CustomNavigationParams) => {
//   console.log('------' + props)
//   const navigation = useNavigation()
//   const topSafeArea = useSafeAreaInsets().top
//   return (
//     <View style={[styles.navigationView, { height: 44 + topSafeArea }]}>
//       <TouchableOpacity
//         style={[styles.navigationButton, { top: topSafeArea }]}
//         onPress={() => {
//           navigation.goBack()
//         }}>
//         <Ionicons
//           style={{ marginLeft: 5 }}
//           name="chevron-back-outline"
//           size={30}
//         />
//       </TouchableOpacity>
//       {/* <Image
//         style={[styles.levelImage, { top: topSafeArea }]}
//         source={{ uri: props.levelUrl }}
//       /> */}
//       {/* <View style={[styles.userContainer, { top: topSafeArea }]}>
//         <Text style={styles.nickName}> {props.nickname} </Text> */}
//       {/* <Ionicons
//           style={{ margin: 5 }}
//           name="location-outline"
//           size={14}
//           color={'gray'}
//         /> */}
//       {/* <Text style={styles.location}> 上海 </Text>
//       </View> */}
//     </View>
//   )
// }

const styles = StyleSheet.create({
  navigationView: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  navigationButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
  },
  levelImage: {
    width: 34,
    height: 34,
    marginTop: 5,
    marginLeft: 20,
  },
  userContainer: {
    height: 34,
    marginTop: 5,
    marginLeft: 5,
  },
  nickName: {
    height: 17,
    fontSize: 14,
  },
  location: {
    top: -20,
    left: 15,
    height: 17,
    fontSize: 14,
    color: 'gray',
  },
  containerView: {
    flex: 1,
    marginTop: 2,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    margin: 10,
  },
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width,
  },
});
