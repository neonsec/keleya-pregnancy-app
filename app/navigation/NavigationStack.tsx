import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './NavigationService';


import ThemeController from '../components/ThemeController';
import { useStore } from '../store';
import OnboardinScreen from 'app/screens/OnboardingScreen';
import NotificationScreen from 'app/screens/NotificationScreen';
import DueScreen from 'app/screens/DueScreen';
import CreateNameScreen from 'app/screens/CreateNameScreen';
import LoginScreen from 'app/screens/LoginScreen';
import WorkoutScreen from 'app/screens/WorkoutScreen';
import SignupScreen from 'app/screens/SignupScreen';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();

interface IProps {
  theme: Theme;
}

const AuthNavigator = () => {
  const isLoggedIn = useStore(state => state.isLoggedIn);

  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen
        name="Onboarding"
        component={OnboardinScreen}

      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}

      />
       <Stack.Screen
        name="Signup"
        component={SignupScreen}

      />
       <Stack.Screen
        name="CreateName"
        component={CreateNameScreen}
      />
      <Stack.Screen
        name="BabyDue"
        component={DueScreen}
      />
       <Stack.Screen
        name="Workout"
        component={WorkoutScreen}
      />
        <Stack.Screen
        name="Notification"
        component={NotificationScreen}
      />

    </AuthStack.Navigator>
  );
};



const App: React.FC<IProps> = (props: IProps) => {
  
  return (
    <NavigationContainer ref={navigationRef} >

      <Stack.Navigator screenOptions={{ headerShown: false }}>
       
          <Stack.Screen
            name="LoginStack"
            component={AuthNavigator}
            options={{
              headerRight: () => <ThemeController />,
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
