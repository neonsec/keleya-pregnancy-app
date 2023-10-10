import React, { useState } from 'react';
import {
  View, Image,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { Text, IconButton, MD3Colors, TextInput } from 'react-native-paper';

// import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { useStore } from 'app/store';
import { } from 'react-native-gesture-handler';
import Button from 'app/components/Button';


const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const ClickSignUp = () => NavigationService.navigate('Signup');
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/authentication-background-image.jpg')}
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

      <View style={styles.bodyText}>
        <Text variant="titleLarge" style={{ color: "#4a4a4a", alignSelf: 'center' }} >Welcome back!</Text>

        <TextInput
          mode='flat'
          label="Email"
          returnKeyType="next"
          value={email.value}
          style={{ backgroundColor: 'white', }}
          onChangeText={text => setEmail({ value: text, error: '' })}
          error={!!email.error}
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <TextInput
          mode='flat'
          label="Password"
          returnKeyType="done"
          style={{ backgroundColor: 'white' }}
          value={password.value}
          onChangeText={text => setPassword({ value: text, error: '' })}
          error={!!password.error}
          secureTextEntry
        />

        <View style={styles.spacing}>
        <Text style={styles.ratingText}>
            Have you fotgotten your password?
         </Text>
          <Button isFullWidth backgroundColor='#69c0ba' onPress={ClickSignUp}>
            <Text variant="titleLarge" style={{ color: 'white' }} >Log in </Text>
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
    height: 300,
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
    color: '#9b9b9b',
    marginHorizontal: 10,
    marginVertical: 10,
    textAlign:'center'
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

export default LoginScreen;
