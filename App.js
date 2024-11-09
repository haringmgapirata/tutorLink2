import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUP from './components/SignUp.js'
import Login from './components/LoginPage.js';
import Dashboard from './components/Dashboard.js'

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false,}}>
          <Stack.Screen name="Login" component={Login}  />
          <Stack.Screen name="SignUp" component={SignUP}/>
          <Stack.Screen name="Dashboard" component={Dashboard}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
