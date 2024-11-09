import { View, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { PaperProvider, Text, Avatar } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'

export default function SignUp({ navigation }) {
  return (
    <PaperProvider>
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.toptxt}>
                        <Text variant='titleSmall' style={{color: '#00008B', marginLeft: 80}}>Dashboard</Text>
                        <MaterialIcons name="settings" size={24} color="#00008B" style={{marginLeft: 80}} />
                    </View>
                    <Image source={require('../assets/avatar.jpg')} size={100} style={styles.avatar} />
                    <Text variant='titleLarge' style={{fontWeight: 'bold'}}>Oliver Smith</Text>
                    <Text variant='titleMedium' style={{opacity:0.5}}>@oliversmith</Text>
                    <View style={styles.containerTop}>
                        <MaterialIcons name="event" size={24} color="#00008B"  />
                        <MaterialIcons name="play-arrow" size={24} color="white" style={{marginLeft: 40, backgroundColor: '#00008B', borderRadius: 20}} />
                        <MaterialIcons name="credit-card" size={24} color="#00008B" style={{marginLeft: 40}} />
                        <MaterialIcons name="check" size={24} color="#00008B" style={{marginLeft: 40}} />
                        <MaterialIcons name="close" size={24} color="#00008B" style={{marginLeft: 40, backgroundColor: 'white'}} />
                    </View>
                    <Text variant='titleLarge' style={{color: '#00008B', fontWeight: 'bold', marginRight: 130, marginTop: 30}}>Tutor Sessions</Text>
                    <View style={{height: 100, width: 300,marginLeft: 2, backgroundColor:'white', padding: 3, flexDirection: 'row', borderRadius: 10}}>
                        <MaterialIcons name="schedule" size={95} color="white" style={{marginLeft: 5, backgroundColor: '#00008B', width: 100, borderRadius: 10,}} />
                        <View style={{flexDirection: 'column'}}>
                            <Text variant='labelMedium' style={{color: '#00008B', marginLeft: 15, marginTop: 30}}>Pending sessions</Text>
                            <Text variant='labelMedium' style={{opacity: 0.5, marginLeft: 15}}>3</Text>
                        </View>
                        <MaterialIcons name="hourglass-empty" size={20} color="#00008B" style={{marginLeft: 20, marginTop: 35, backgroundColor: 'white'}} />
                    </View>
                    <Text variant='titleLarge' style={{color: '#00008B', fontWeight: 'bold', marginRight: 50, marginTop: 30, width: 250}}>Balance Information</Text>
                    <View style={{height: 100, width: 300,marginLeft: 2, backgroundColor:'white', padding: 3, flexDirection: 'row', borderRadius: 10, marginTop: 20}}>
                        <MaterialIcons name="monetization-on" size={95} color="white" style={{marginLeft: 5, backgroundColor: '#00008B', width: 100, borderRadius: 10,}} />
                        <View style={{flexDirection: 'column'}}>
                            <Text variant='labelMedium' style={{color: '#00008B', marginLeft: 15, marginTop: 30}}>Currency</Text>
                            <Text variant='labelMedium' style={{opacity: 0.5, marginLeft: 15}}>Balance</Text>
                        </View>
                        <Text variant='labelMedium' style={{color: '#00008B', marginLeft: 40, marginTop: 35}}>$150.00</Text>
                    </View>
                    <View style={{height: 100, width: 300,marginLeft: 2, backgroundColor:'white', padding: 3, flexDirection: 'row', borderRadius: 10, marginTop: 20}}>
                        <MaterialIcons name="account-circle" size={95} color="white" style={{marginLeft: 5, backgroundColor: '#00008B', width: 100, borderRadius: 10,}} />
                        <View style={{flexDirection: 'column'}}>
                            <Text variant='labelMedium' style={{color: '#00008B', marginLeft: 15, marginTop: 30}}>Tutoring</Text>
                            <Text variant='labelMedium' style={{opacity: 0.5, marginLeft: 15}}>Credits</Text>
                        </View>
                        <Text variant='labelMedium' style={{color: '#00008B', marginLeft: 40, marginTop: 35}}>Credits</Text>
                    </View>
                    <View style={{height: 100, width: 300,marginLeft: 2, backgroundColor:'white', padding: 3, flexDirection: 'row', borderRadius: 10, marginTop: 20}}>
                        <MaterialIcons name="school" size={95} color="white" style={{marginLeft: 5, backgroundColor: '#00008B', width: 100, borderRadius: 10,}} />
                        <View style={{flexDirection: 'column'}}>
                            <Text variant='labelMedium' style={{color: '#00008B', marginLeft: 15, marginTop: 30}}>Tutees</Text>
                            <Text variant='labelMedium' style={{opacity: 0.5, marginLeft: 15}}>View tutees</Text>
                        </View>
                        <MaterialIcons name="hourglass-empty" size={20} color="#00008B" style={{marginLeft: 40, marginTop: 35, backgroundColor: 'white'}} />
                    </View>
                    <View style={styles.containerTop}>
                        <MaterialIcons name="person" size={24} color="#00008B"  />
                        <MaterialIcons name="schedule" size={24} color="white" style={{marginLeft: 40, backgroundColor: '#00008B', borderRadius: 20}} />
                        <MaterialIcons name="book" size={24} color="#00008B" style={{marginLeft: 40}} />
                        <MaterialIcons name="calendar-today" size={24} color="#00008B" style={{marginLeft: 40}} />
                        <MaterialIcons name="chat-bubble" size={24} color="#00008B" style={{marginLeft: 40, backgroundColor: 'white'}} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    </PaperProvider>
    
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#D9D9D9',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      flexDirection: 'column'
    },
    toptxt:{
        flexDirection: 'row',
    },
    avatar:{
        marginTop: 30,
        borderWidth: 2,
        borderColor: '#00008B',
        borderRadius: 50,
        height: 100,
        width: 100,

    },
    containerTop:{
        width: 300,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginTop: 30,
        flexDirection: 'row',
        borderRadius: 10,
    }
});