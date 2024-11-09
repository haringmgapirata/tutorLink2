import { View, ScrollView, StyleSheet, Image, Animated } from 'react-native'
import React, {useState, useRef} from 'react'
import { PaperProvider,Text, TextInput, Button} from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function SignUp({ navigation }){
    const [checked, setChecked] = React.useState(false);

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);

    };
    const [isTutor, setIsTutor] = useState(true);
    
    const toggleRoleTutor = () => {
            setIsTutor(!isTutor);
    };

    const [isTutee, setIsTutee] = useState(true);
    
    const toggleRoleTutee = () => {
            setIsTutee(!isTutor);
    };
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.spring(scaleAnim, {
        toValue: 0.95,
        useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleAnim, {
        toValue: 1,
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
                        <Text variant='labelLarge' style={{marginRight: 170, marginTop: 20}}>Phone number</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                            mode="outlined"
                            editable={false}
                            value="+63"
                            style={styles.prefixInput}
                            />
                            <TextInput
                            mode="outlined"
                            keyboardType="phone-pad"
                            style={styles.phoneInput}
                            />
                        </View>
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
                        <View style={{flexDirection: 'row', marginTop: 20}}>
                            <Text variant='labelMedium'>I'm a</Text>
                            <Button
                            mode='outlined'
                            buttonColor={isTutor ? '#D9D9D9' : '#FFD700'} // Adjust color as needed
                            onPress={toggleRoleTutor}
                            style={styles.roleBut}
                            labelStyle= {{fontSize: 14, color: 'black'}}
                            >
                                Tutor
                            </Button>
                            <Button
                            mode='outlined'
                            buttonColor={isTutee ? '#D9D9D9' : '#FFD700'} // Adjust color as needed
                            onPress={toggleRoleTutee}
                            style={styles.roleBut}
                            labelStyle= {{fontSize: 14, color: 'black'}}
                            >
                                Tutee
                            </Button>
                        </View>
                    </View>
                    <View style={{backgroundColor: '#F8F8F8', width:'100%'}}>
                        <View style={{flexDirection: 'row', height: 25}}>
                            <Text variant='bodySmall' style={{fontSize: 10, opacity: 0.6, marginTop: 10, marginLeft: 25}}>By signing up, you are agree to our</Text>
                            <Button
                            mode='text'
                            labelStyle={{fontSize: 10}}
                            style={styles.tandc}

                            >
                                Terms & Conditions
                            </Button>
                        </View>
                        <View style={{flexDirection: 'row', height: 25}}>
                            <Text variant='bodySmall' style={{fontSize: 10,  opacity: 0.6, marginTop: 10, marginLeft: 25}}>and</Text>
                            <Button
                            mode='text'
                            labelStyle={{fontSize: 10}}
                            style={styles.tandc}
                                
                            >
                                Policies
                            </Button>
                        </View>
                    </View>
                    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                        <Button
                                mode='contained'
                                buttonColor='#00008B'
                                style={{width: 200, borderRadius: 10, marginTop:30}}
                                onPress={() => navigation.navigate('Login')}
                                onPressIn={handlePressIn}
                                onPressOut={handlePressOut}
                                >
                                Sign Up
                        </Button>
                    </Animated.View>

                    <View style={{flexDirection: 'row', width: 250}}>
                            <Text variant='bodySmall' style={{marginTop: 12, marginLeft: 20, opacity: 0.6}}>Already have an account?</Text>
                            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                                <Button
                                mode='text'
                                labelStyle={{fontSize: 12, color: '#00008B'}}
                                onPress={() => navigation.navigate('Login')}
                                onPressIn={handlePressIn}
                                onPressOut={handlePressOut}
                                >
                                    Login
                                </Button>
                            </Animated.View>
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
      width: '100%',
      backgroundColor:'#F8F8F8'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    prefixInput: {
        width: 60,
        height: 40,
    },
    phoneInput: {
        width: 225,
        height: 40,
    },
    roleBut:{
        height: 40,
        width: 112,
        marginLeft: 13,
        borderRadius: 5,
    },
    tandc:{
        height: 45,

    }
});