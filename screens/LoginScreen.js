import React, {useState, useEffect, useContext} from 'react'
import {useNavigation} from '@react-navigation/core'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { OnboardingContext } from './context/OnboardingContext.js';
import { UserContext } from './context/UserContext.js';
import { auth, onAuthStateChanged, db} from '../firebase.js'
import { getFirestore, collection, doc, getDocs, addDoc, setDoc} from 'firebase/firestore/lite';
import { getDatabase, ref, set, onValue, get, child } from "firebase/database";

const database = getDatabase();

const image = require(`../assets/purpleSquare.png`);
const gripStrength = require(`../assets/gripStrength.png`);
const suppliment = require(`../assets/suppliment.png`);
const dumbbell = require(`../assets/dumbbell.png`);
const stopWatch = require(`../assets/stopwatch.png`);
const RPTlogo = require('../assets/RPTRAINERlogo.png');


const LoginScreen = () => {
  const onboardingState = useContext(OnboardingContext);
  onboardingState.onboarding_step = 0;
  const userState = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, user => {
  //     if (user) {
  //       if (userState.needs_onboarding === true){
  //         navigation.navigate("Onboarding")
  //       } else {
  //         navigation.navigate("Home")
  //       }
  //     }
  //   })
  //   return unsubscribe;
  // }, [])
  const handleSignUp = () => {
  auth
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
      userState.needs_onboarding = true;
      navigation.navigate("Onboarding")
      const user = userCredentials.user;
      console.log(`Registered with ${user.email}`);
      setDoc(doc(db, "users", user.email), {
        email: user.email,
      })
    })
    .catch(error => alert(error.message))
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
      userState.needs_onboarding = false;
      navigation.navigate("Home")
      const user = userCredentials.user;
      console.log(`Logged in with ${user.email}`)
      })
      .catch(error => alert(error.message))
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding">
        <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <Image
          source={gripStrength}
          resizeMode='cover'
          style={styles.gripStrength}
        />
        <Image
          source={suppliment}
          resizeMode='cover'
          style={styles.suppliment}
        />
        <Image source={stopWatch} resizeMode='cover' style={styles.stopwatch} />
        <Image source={dumbbell} resizeMode='cover' style={styles.dumbbell} />
        <Image source={RPTlogo} style={styles.logo} />
        {/* <Text style={styles.text}>RPTrainer</Text> */}
        <Text style={styles.headline}>Waffles are just pancakes with abs</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={handleLogin}
        style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={handleSignUp}
        style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    overflow: 'visible',
  },
  logo: {
    position: 'absolute',
    overflow: 'visible',
    width: 125,
    height: 125,
    left: 135,
    bottom: 675,
  },
  image: {
    flex: 1,
    // paddingTop: 100,
    marginTop: -10,
    justifyContent: 'center',
    width: 400,
    height: 600,
    overflow: 'visible',
    alignSelf: 'stretch',
  },
  gripStrength: {
    flex: 1,
    width: 500,
    height: 500,
    right: -75,
    top: -60,
    overflow: 'visible',
    transform: [{ scale: 0.45 }],
  },
  suppliment: {
    flex: 0,
    overflow: 'visible',
    position: 'absolute',
    width: 700,
    height: 200,
    right: -130,
    top: 200,
    transform: [{ scale: 0.3 }],
  },
  stopwatch: {
    flex: 0,
    overflow: 'visible',
    position: 'absolute',
    width: 800,
    height: 300,
    right: -40,
    top: 290,
    transform: [{ scale: 0.23 }, { rotate: '0deg' }],
  },
  dumbbell: {
    flex: 0,
    overflow: 'visible',
    position: 'absolute',
    width: 800,
    height: 300,
    right: -40,
    top: -90,
    transform: [{ scale: 0.3 }, { rotate: '0deg' }],
  },
  headline: {
    width: 343,
    height: 70,
    position: 'absolute',
    top: 600,
    left: 30,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',

    color: '#252727',
  },
  text: {
    overflow: 'visible',
    color: 'white',
    position: 'absolute',
    fontSize: 42,
    top: 130,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    top: -300,
    left: 35,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonContainer: {
    top: -50,
    left: 80,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#7261E1',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#7261E1',
    fontWeight: '700',
    fontSize: 16,
  },
})