// import React, { Component } from 'react'
// import { Text, StyleSheet, View } from 'react-native'
// function myType() {
//     //数组类型 [1,2,3]
//     let arr1: number[]
//     arr1 = [1]
//     console.log('---arr1-->' + arr1)
//     let arr2: Array<number>
//     arr2 = [2]
//     console.log('---arr2-->' + arr2)
//     let arr3: (string | number)[]
//     arr3 = [3, 'a']
//     console.log('---arr3-->' + arr3)

//     //元组 固定长度固定位置类型对应
//     let tuple: [String, number, boolean]
//     tuple = ['a', 1, true]
//     console.log('---tuple-->' + tuple)

//     //枚举,指定1，后面不指定 第二值是2，第三个值3。分别指定就按指定的
//     enum Roles {
//         SUPER_ADMIN = 1,
//         SDMIN,
//         USER,
//     }
//     console.log('---Roles-->' + Roles.USER)
//     //object
//     let obj = {
//         name: 'Y',
//     }
//     let obj2 = obj
//     obj2.name = 'L'

//     console.log('---obj-->' + obj)
// }

// export default class
//     extends Component {

//     componentDidMount(): void {
//         myType()
//     }

//     render() {
//         return (
//             <View>
//             <Text>textInComponent < /Text>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({})
