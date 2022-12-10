// @ts-nocheck
import Reactotron, { networking } from 'reactotron-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

if (__DEV__ && !process.env.JEST_WORKER_ID) {
  // @ts-ignore
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure()
    // .configure({ host: '192.168.15.38' })
    .use(networking())
    .useReactNative()
    .connect()

  tron.clear()
}
