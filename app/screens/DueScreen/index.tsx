import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import { Text, IconButton } from 'react-native-paper';

// import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { } from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker'

import Button from 'app/components/Button';


const DueScreen: React.FC = () => {

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)



  const ClickWorkout = () => NavigationService.navigate('Workout');
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/due-date-background-image.jpg')}
        style={styles.headerBackground}>
        <TouchableWithoutFeedback onPress={() => console.log('Pressed')}>
          <View style={styles.backBtn}>
            <IconButton
              icon="arrow-left-bold"
              iconColor="black"
              size={30}
              onPress={() => NavigationService.goBack()}
            />
          </View>
        </TouchableWithoutFeedback>

      </ImageBackground>

      <View style={styles.bodyText} >
        <Text variant="titleLarge" style={{ color: "#4a4a4a", alignSelf: 'center', padding: 4, textAlign: 'center' }} >When is your baby due, Sam?</Text>

        <Button style={{ width: 150, height: 40, alignSelf: 'center', marginTop: 20 }} backgroundColor='#EFF0F2' onPress={() => setOpen(true)} >
          <Text variant="labelSmall" style={{ color: '#3365FF' }} >{date.toDateString()} </Text>
        </Button>
        <DatePicker
          modal
          mode='date'
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false)
            setDate(date)
          }}
          onCancel={() => {
            setOpen(false)
          }}
        />

        <View style={styles.spacing}>
          <Button isFullWidth backgroundColor='#69c0ba' onPress={ClickWorkout}>
            <Text variant="titleLarge" style={{ color: 'white' }} > Continue </Text>
          </Button>
        </View>



      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  headerBackground: {
    width: '100%',
    height: 400,
  },
  backBtn: {
    // height: 80,
    // width: 80,
    // backgroundColor: '#fff',
    position: 'absolute',
    left: 30,
    top: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacing: {
    marginTop: 80
  },
  ratingText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  destinationName: {
    fontSize: 27,
    color: '#fff',
    fontWeight: 'bold',
  },
  heartView: {
    position: 'absolute',
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    right: 30,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyText: {
    width: '100%',
    paddingHorizontal: 30,
    marginVertical: 20,
    marginBottom: 100,

  },
  description: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
  details: {
    fontSize: 16,
    marginVertical: 20,
    lineHeight: 25,
    color: '#000000',
  },
  showMore: {
    fontSize: 18,
    color: '#0359c9',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  categoriesBackground: {
    height: 170,
    width: 170,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleView: {
    width: 120,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DueScreen;
