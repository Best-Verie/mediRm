import React, { useState } from 'react';
import Home from './components/home';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const getFonts = () =>
  Font.loadAsync({
    'poppins-regular': require('./src/assets/fonts/poppins/Poppins-Regular.ttf'),
    'poppins-bold': require('./src/assets/fonts/poppins/Poppins-Bold.ttf'),
    'poppins-thin': require('./src/assets/fonts/poppins/Poppins-Thin.ttf'),
    'poppins-medium': require('./src/assets/fonts/poppins/Poppins-Medium.ttf'),
    'poppins-light': require('./src/assets/fonts/poppins/Poppins-Light.ttf'),
    'poppins-black': require('./src/assets/fonts/poppins/Poppins-Black.ttf'),
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

