import React, { useState } from 'react';
import {
  View, Image,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import { Text, IconButton, TextInput, Checkbox, } from 'react-native-paper';

// import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { } from 'react-native-gesture-handler';
import Button from 'app/components/Button';


const SignupScreen: React.FC = () => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [checked, setChecked] = useState(false);
  const [termchecked, setTermChecked] = useState(false);


  const ClickCreateName = () => NavigationService.navigate('CreateName');
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
        <Text variant="titleLarge" style={{ color: "#4a4a4a", alignSelf: 'center', padding: 4, textAlign: 'center' }} >Add your details below to set up an account</Text>

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
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={styles.label}>I've read the privacy policy</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={termchecked ? 'checked' : 'unchecked'}
            onPress={() => {
              setTermChecked(!termchecked);
            }}
          />
          <Text style={styles.label}>I accept the terms & conditions</Text>
        </View>

        <View style={styles.spacing}>
          <Button isFullWidth backgroundColor='#69c0ba' onPress={ClickCreateName}>
            <Text variant="titleLarge" style={{ color: 'white' }} >Create account </Text>
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

    position: 'absolute',
    left: 30,
    top: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacing: {
    marginTop: 20
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
  checkboxContainer: {
    flexDirection: 'row',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
    color:'#4a4a4a'
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

export default SignupScreen;
