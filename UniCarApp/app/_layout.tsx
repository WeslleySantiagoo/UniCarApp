import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'MontserratBold': require('../assets/fonts/Montserrat-Bold.ttf'),
    'Inter': require('../assets/fonts/Inter.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name='SplashScreen/index'
        options={{title: 'SplashScreen', headerShown: false,
        animation: "default",
        animationDuration: 700}}
      /> 
      <Stack.Screen
        name='Home/index'
        options={{title: 'Home', headerShown: false,
        animation: "default",
        animationDuration: 700}}
      /> 
      <Stack.Screen
      name='OfferRide/index'
      options={{
        title: 'OfferRide', 
        headerShown: false,
        animation: "slide_from_right",
      }}/>
    </Stack>
  );
}
