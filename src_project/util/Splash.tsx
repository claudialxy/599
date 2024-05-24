import { NativeModules } from 'react-native';

const { SplashModule } = NativeModules;
interface SplashInterface {
  hideSplash(): void;
}
export default SplashModule as SplashInterface;
