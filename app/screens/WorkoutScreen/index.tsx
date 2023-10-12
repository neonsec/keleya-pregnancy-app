import React, { useRef, useState } from 'react';
import {
  View, Image,
  StyleSheet,
  ImageBackground,

} from 'react-native';
import { Text, IconButton } from 'react-native-paper';

// import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { } from 'react-native-gesture-handler';
import Button from 'app/components/Button';
import {ScrollPicker} from 'react-native-value-picker';


export const MOCK_DATA = [
  {
    value: 1,
    label: 'Once a week',
  },
  {
    value: 2,
    label: '2 times a week',
  },
  {
    value: 3,
    label: '3 times a week',
  },{
    value: 4,
    label: '4 times a week',
  },{
    value: 5,
    label: '5 times a week',
  },{
    value: 6,
    label: '6 times a week',
  },{
    value: 7,
    label: '7 times a week',
  },
];


const WorkoutScreen: React.FC = () => {
  const [pickedValue, setPickedValue] = useState(7);


  const ClickNotification = () => NavigationService.navigate('Notification');
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/workout-goal-background-image.jpg')}
        style={styles.headerBackground}>
        <View style={styles.backBtn}>
          <IconButton
            icon="arrow-left-bold"
            iconColor="black"
            size={30}
            onPress={() => NavigationService.goBack()}
          />
        </View>

        <View style={styles.spacing}>

          <Text style={styles.destinationName}>
            How many times a week do you want to be active ?
          </Text>
        </View>

      </ImageBackground>

      <View style={styles.bodyText}>
      <View style={styles.PickerContainer}>

      <ScrollPicker
          currentValue={pickedValue}
          extraData={pickedValue}
          list={MOCK_DATA}
          style={styles.details}
          onItemPress={setPickedValue}
        />
        </View>
        <View style={styles.spacing}>
          <Button isFullWidth backgroundColor='#69c0ba' onPress={ClickNotification}>
            <Text variant="titleLarge" style={{ color: 'white' }} >Continue </Text>
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
    marginTop: 30
  },
  ratingText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  destinationName: {
    fontSize: 24,
    padding: 6,
    paddingTop:30,
    paddingLeft: 40,
    paddingRight: 40,
    color: '#4a4a4a',
    textAlign: 'center'
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

  PickerContainer: {
    height: 150,
    width: 150,
    marginVertical: 5,
    alignSelf:'center',
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

export default WorkoutScreen;
