import { View, Image } from 'react-native'
import React, {useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Loading ({ navigation }){

  useEffect(() => {
    // Simulate a delay of 1 second
    const timer = setTimeout(() => {
      SplashScreen.hide();
      // After 1 second, navigate to the Login screen
      navigation.replace('Dashboard'); // 'replace' ensures the user can't go back to this screen
    }, 3000); // 1000 milliseconds = 1 second

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <SafeAreaView>
    <View style={{height: '100%', width: '100%', backgroundColor: '#00008B', alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('../assets/loading.png')} style={{height: 150, width: 300}} />
    </View>
    </SafeAreaView>
  )
}
