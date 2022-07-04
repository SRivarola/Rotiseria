import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import store from './src/store/index';
import Root from './src/Index';

export default function App() {

  const [loaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf')
  })

  if (!loaded) {
    return <ActivityIndicator />;
  }
  
  return (
    <Provider store={store}>
        <Root />
    </Provider>
  );
}


