import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  TextInput,
  ImageBackground,
} from 'react-native';
import { OnboardingContext } from './context/OnboardingContext.js';
import {UserContext} from './context/UserContext.js'
import { useContext, useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { days, months, years } from './context/data.js';
import {useNavigation} from '@react-navigation/core'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const image = require('../assets/purpleSquare.png');

const Onboarding = (props) => {
  const onboardingState = useContext(OnboardingContext);
  const userState = useContext(UserContext);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [bodyFat, setBodyFat] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bdMonth, setbdMonth] = useState('MONTH');
  const [bdDay, setbdDay] = useState('DAY');
  const [bdYear, setbdYear] = useState('YEAR');

  const navigation = useNavigation()

  const finishOnboarding = (onboardingData) => {
      let userName = onboardingData.user_name;
      let userAge = onboardingData.user_age;
      let userWeight = onboardingData.user_weight;
      let userBodyFat = onboardingData.user_body_fat;

      userState.user_name = userName;
      userState.user_age = userAge,
      userState.user_weight = userWeight,
      userState.user_body_fat = userBodyFat,
      navigation.navigate("Home")
  };

  return (
    <View style={styles.onboarding_container}>
          <ImageBackground
            source={image}
            resizeMode='cover'
            style={styles.image}
          />
          {/* <View style={styles.container}> */}
            <TextInput
              placeholder={`What's your name?`}
              id='user_name'
              onChangeText={(value) => setName(value)}
              style={styles.nameText}></TextInput>
            <Text style={styles.bDText}>When is your birthday?</Text>
            <View style={styles.dateContainer}>
              <Picker
                selectedValue={bdMonth}
                style={styles.column}
                onValueChange={(value) => setbdMonth(value)}>
                {months.map((month) => {
                  return (
                    <Picker.Item key={month} label={month} value={month} />
                  );
                })}
              </Picker>
              <Picker
                value={bdDay}
                style={styles.column}
                selectedValue={bdDay}
                onValueChange={(value) => setbdDay(value)}>
                {days.map((day) => {
                  return <Picker.Item key={day} label={day} value={day} />;
                })}
              </Picker>
              <Picker
                selectedValue={bdYear}
                style={styles.column}
                onValueChange={(value) => setbdYear(value)}>
                {years.map((year) => {
                  return <Picker.Item key={year} label={year} value={year} />;
                })}
              </Picker>
            </View>
            <Text style={styles.weightText}>What is your current weight?</Text>
            <Slider
              selectedValue={weight}
              style={styles.weightSlider}
              step={1}
              minimumValue={0}
              maximumValue={700}
              minimumTrackTintColor='#1fb28a'
              maximumTrackTintColor='#d3d3d3'
              thumbTintColor='#b9e4c9'
              onValueChange={(value) => {
                setWeight(value);
              }}
            />
            <Text style={styles.weightMetrics}>
              {`${weight}`}lbs / {`${Math.floor(weight / 2.2)}Kgs`}
            </Text>
            <Text style={styles.bfText}>
              What is your current body fat percentage?
            </Text>
            <Slider
              selectedValue={bodyFat}
              style={styles.bfSlider}
              step={1}
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor='#1fb28a'
              maximumTrackTintColor='#d3d3d3'
              thumbTintColor='#b9e4c9'
              onValueChange={(value) => {
                setBodyFat(value);
              }}
            />
            <Text style={styles.lbmMetrics}>
              {`${bodyFat}`}%{' '}
              {`${Math.floor(weight - weight * (bodyFat / 100))}`}lbs LBM
            </Text>
            <View style={styles.buttonContainer}>
            <Pressable
            style={styles.button}
            onPress={() => {
                const payload = {
                  user_age: age,
                  user_body_fat: bodyFat,
                  user_name: name,
                  user_weight: weight,
            }
            finishOnboarding(payload);
          }
        }
            accessibilityLabel='Click here to finish onboarding'>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
          {/* </View> */}
          </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  onboarding_container: {
    top: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // marginTop: 40,
  },
  // container: {
  //   display: 'flex',
  //   // flex: 1,
  //   zIndex: 1,
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   justifyContent: 'space-evenly',
  //   paddingTop: 150,
  // },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    // top: -450,
    width: '30%',
    paddingBottom: 40,
  },
  weightSlider: {
    // top: -450,
    // paddingTop: '20%',
    // paddingLeft: 200,
    width: '90%',
    // marginTop: 10,
  },
  bfSlider: {
    width: '90%',
  },
  nameText: {
    paddingBottom: 40,
    // position: 'fixed',
    // zIndex: 1,
    // textAlign: 'center',
    // overflow: 'visible',
    // top: -450,
    color: '#282828',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 20,
    textAlign: 'center',
  },
  weightText: {
    paddingBottom: 40,
    // position: 'fixed',
    // zIndex: 1,
    // textAlign: 'center',
    // overflow: 'visible',
    // top: -450,
    color: '#282828',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 20,
    textAlign: 'center',
  },
  bfText: {
    paddingBottom: 40,
    // position: 'fixed',
    // zIndex: 1,
    // textAlign: 'center',
    // overflow: 'visible',
    // top: -450,
    color: '#282828',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 20,
    textAlign: 'center',
  },
  bDText: {
    paddingBottom: 0,
    // position: 'fixed',
    // zIndex: 1,
    // textAlign: 'center',
    // overflow: 'visible',
    // top: -450,
    color: '#282828',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 20,
    textAlign: 'center',
  },
  lbmMetrics: {
    textAlign: 'center',
    // overflow: 'visible',
    top: -70,
    color: '#282828',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 20,
    // textAlign: 'center',
  },
  weightMetrics: {
    textAlign: 'center',
    // overflow: 'visible',
    top: -70,
    color: '#282828',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 20,
    // textAlign: 'center',gn: 'center',
  },
  image: {
    // flex: 0,
    // paddingTop: 100,
    // marginTop: -30,
    // zIndex: 0,
    // justifyContent: 'center',
    // width: 400,
    // height: 600,
    // overflow: 'visible',
    // alignSelf: 'stretch',
    // display: 'absolute',
  },
  buttonContainer: {
    // top: 100,
    // left: 80,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 40,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#7261E1',
    zIndex: 6,
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    // top: -500,
  },

});
