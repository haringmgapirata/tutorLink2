import { View, StyleSheet, Image, ScrollView, Animated} from 'react-native'
import React , {useState, useRef}from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { PaperProvider, Text, TextInput, Button, Checkbox } from 'react-native-paper'
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'

export default function Login({ navigation }) {

    const [checked, setChecked] = React.useState(false);

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);

    };
    const scaleAnim = useRef(new Animated.Value(1)).current; // Initial scale of 1

    const handlePressIn = () => {
        Animated.spring(scaleAnim, {
        toValue: 0.95, // Scale down slightly
        useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleAnim, {
        toValue: 1, // Return to original scale
        useNativeDriver: true,
        }).start();
    };

  return (
    <PaperProvider>
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={{height: 200, width: '100%', alignItems: 'center', justifyContent:'center', backgroundColor:'#F8F8F8', flexDirection:'column'}}>
                        <Image source={require('../assets/logo.png')} />
                    </View >
                    <View style={{height: 350, width: '100%', alignItems: 'center',  backgroundColor:'#F8F8F8', flexDirection:'column'}}>
                        <Text variant='labelLarge' style={{marginRight: 180, marginTop: 40}}>Email address</Text>
                        <TextInput 
                        mode='outlined'
                        style={{height: 40, width: 285}}
                        />
                        <Text variant='labelLarge' style={{marginRight: 170, marginTop: 20}}>Enter password</Text>
                        <TextInput
                        mode="outlined"
                        secureTextEntry={!isPasswordVisible}
                        right={
                            <TextInput.Icon
                            icon={isPasswordVisible ? 'eye' : 'eye-off'}
                            onPress={togglePasswordVisibility}

                            />
                        }
                        style={{width: 285, height: 40}}
                        />
                        <View style={{flexDirection: 'row', width: 285, marginRight: 16}}>
                            <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                            color='black'
                            />
                            <Text variant='labelMedium' style={{marginTop: 8}}>Remember me</Text>
                            <Button
                            mode='text'
                            labelStyle={{fontSize: 12, marginLeft: 45, color: '#00008B'}}
    
                            >
                                Forgot password?
                            </Button>
                        </View>
                        <Button
                            mode='contained'
                            buttonColor='#00008B'
                            style={{width: 200, borderRadius: 10, marginTop:30}}
                            onPress={() => navigation.navigate ('Dashboard')}
                            >
                                Login
                        </Button>
                        <View style={{flexDirection: 'row', width: 250}}>
                            <Text variant='bodySmall' style={{marginTop: 12, marginLeft: 20, opacity: 0.6}}>Don't have an account?</Text>
                            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                                <Button
                                mode='text'
                                labelStyle={{fontSize: 12, color: '#00008B'}}
                                onPress={() => navigation.navigate('SignUp')}
                                onPressIn={handlePressIn}
                                onPressOut={handlePressOut}
                                >
                                    Sign up
                                </Button>
                            </Animated.View>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', alignItems: 'center',justifyContent: 'center', backgroundColor: '#F8F8F8'}}>
                        <View style={styles.separatorLine} />
                        <Text style={styles.orText}>OR</Text>
                        <View style={styles.separatorLine} />
                    </View>
                    <View style={{height: 200, width:'100%', flexDirection: 'column', backgroundColor: '#F8F8F8', alignItems:'center'}}>
                        <Button mode="contained" style={[styles.googleButton, {flexDirection: 'row'}]}>
                        <FontAwesome5 name="google" size={24} color="white" style={[styles.icon,{color: '#4285F4', }]} />
                        <Text style={[styles.buttonText, { color: 'black' }]}>Continue with Google</Text>
                        </Button>

                        <Button mode="contained" style={[styles.facebookButton,{flexDirection:'row'}]}>
                        <MaterialIcons name="facebook" size={24} color="white" style={styles.icon} />
                        <Text style={styles.buttonText}>Continue with Facebook</Text>
                        </Button>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%'
    },
    separatorLine: {
        flex: 1,
        height: 1,
        backgroundColor: 'black', // Adjust color as needed
        marginHorizontal: 10, // Adjust margin as needed
    },
    orText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black', // Adjust color as needed
    },
    googleButton: {
        backgroundColor: 'white',
        width: 300,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    facebookButton: {
        backgroundColor: '#0B448D',
        borderRadius: 10,
        width: 300,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
      icon: {
        marginRight: 20,
        fontSize: 19
    },
      buttonText: {
        color: 'white',
        marginLeft: 30
    },
  });
