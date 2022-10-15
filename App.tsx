import 'react-native-gesture-handler';
import { Routes } from './src/routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import './src/database/queryExecute';
import { BoxAlert } from './src/components/alert/alert';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#f97316"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </GestureHandlerRootView>
  )
}