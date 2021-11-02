import React, { useState } from 'react';
import Home from './components/home';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const getFonts = () =>
  Font.loadAsync({
    'poppins-regular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
    'poppins-thin': require('./assets/fonts/Poppins/Poppins-Thin.ttf'),
    'poppins-medium': require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
    'poppins-light': require('./assets/fonts/Poppins/Poppins-Light.ttf'),
    'poppins-black': require('./assets/fonts/Poppins/Poppins-Black.ttf'),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Home />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }
}

