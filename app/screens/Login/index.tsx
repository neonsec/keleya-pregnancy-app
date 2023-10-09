import React, { useState } from 'react';
import {
  View, Image,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Text,
  ScrollView
} from 'react-native';
import { Button, IconButton, MD3Colors, TextInput } from 'react-native-paper';

// import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { useStore } from 'app/store';
import { } from 'react-native-gesture-handler';


const Login: React.FC = () => {
  const setIsLoggedIn = useStore(state => state.setIsLoggedIn);
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const onLogin = () => {
    setIsLoggedIn(true);
  };
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/authentication-background-image.jpg')}
        style={styles.headerBackground}>
        <TouchableWithoutFeedback onPress={() => console.log('Pressed')}>
          <View style={styles.backBtn}>
            {/* <Icon
              name="caret-back-outline"
              style={{color: '#ccc', fontSize: 25}}
            /> */}
            <IconButton
              icon="arrow-left-bold"
              iconColor="black"
              size={30}
              onPress={() => console.log('Pressed')}
            />
          </View>
        </TouchableWithoutFeedback>


        {/* <View style={styles.placeName}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <IconButton
              icon="camera"
              iconColor="black"
              size={20}
              onPress={() => console.log('Pressed')}
            />
            <Text style={styles.ratingText}> Texttt </Text>
          </View>
          <Text style={styles.destinationName}>
            sdfdxgchfvgjbhk ghvjbknk.m,/.dfcgfcghmvjhmb,
          </Text>
        </View>

        <View style={styles.heartView}>
          <IconButton
            icon="camera"
            iconColor={MD3Colors.error50}
            size={20}
            onPress={() => console.log('Pressed')}
          />
        </View> */}
      </ImageBackground>

      <View style={styles.bodyText}>
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

        <Button mode="contained-tonal" style={{marginTop: 30}} buttonColor='#69c0ba' onPress={() => console.log('say')}>
          Login
        </Button>


        {/* <Button icon="camera" onPress={() => console.log('say')}
                mode="contained" textColor="black" style={{ backgroundColor: '#69c0ba', elevation: 0, }}>
                Project
              </Button> */}


      </View>
      {/* <View style={styles.container}>
        <Text style={styles.login}>Login Status </Text>
        <Button icon="login" mode="outlined" onPress={onLogin}>
          Login
        </Button>
        <Button
          mode="text"
          style={styles.forgot}
          labelStyle={styles.labelStyle}
          onPress={onForgot}>
          Forgot Password
        </Button>
      </View> */}
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
  placeName: {
    position: 'absolute',
    bottom: 20,
    left: 30,
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

export default Login;
