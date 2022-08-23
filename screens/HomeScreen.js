import React, {useContext} from 'react'
import {useNavigation} from '@react-navigation/core'
import { TouchableOpacity, StyleSheet, Text, View} from 'react-native'
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import {UserContext} from './context/UserContext.js'

import AddLift from './AddLift.js'
import PlateCalc from './PlateCalc.js'
import OneRepMaxCalc from './OneRepMaxCalc.js'
import TodaysRoutine from './TodaysRoutine.js'

const HomeScreen = () => {
  const userState = useContext(UserContext)
  const navigation = useNavigation()
  const auth = getAuth()

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        userState.needs_onboarding = true;
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <View style={styles.header}>
        <Text style={styles.flavorText}>
          TOO MUCH PROTEIN? NO WHEY, BRO!
        </Text>
        <Text style={styles.userName}>
          {/* Hello, {`${routineState.user_name.split(' ')[0]} 👋`} */}
        </Text>
      </View>
      <View style={styles.secondRow}>
        <Text style={styles.smallHeader}>My Plan</Text>
        <View style={styles.toolKitContainer}>
          <TodaysRoutine />
          <AddLift />
          <PlateCalc />
          <OneRepMaxCalc />
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignOut}
        >
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
    </View>
  )
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
  },
  header: {
    // bottom: -700,
  },
  smallHeader: {
    // left: 42.5,
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 62,
  },
  flavorText: {
    // left: -55,
    fontSize: 8,
    // color: '#828282',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    // left: -55,
    // marginBottom: 25,
    // marginTop: 5,
  },
  secondRow: {
    paddingLeft: 2,
  },
  toolKitContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#7261E1',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})