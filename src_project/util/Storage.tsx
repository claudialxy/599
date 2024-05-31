import AsyncStorage from '@react-native-async-storage/async-storage'

export default class Storager {
  storeData = async (key: string, value: any) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      console.log('Storage Value Error : ', JSON.stringify(e))
    }
  }

  storeDataObject = async (key: string, value: any) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      // saving error
    }
  }

  getData = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  }

  getDataObject = async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e) {
      // error reading value
    }
  }
}
