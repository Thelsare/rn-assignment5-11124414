import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from 'styled-components/native';
import { Image } from 'react-native';
import Homepage from './Components /Homepage';
import Settings from './Screens/Settings';
import { lightTheme, darkTheme } from './theme';

const Tab = createBottomTabNavigator();

function PlaceholderScreen() {
  return null;
}

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = require('./assets/home.png');
              } else if (route.name === 'MyCards') {
                iconName = require('./assets/myCards.png');
              } else if (route.name === 'Statistics') {
                iconName = require('./assets/statictics.png');
              } else if (route.name === 'Settings') {
                iconName = require('./assets/settings.png');
              }
              return <Image source={iconName} style={{ width: size, height: size, tintColor: color }} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: theme.primary,
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={Homepage} />
          <Tab.Screen name="MyCards" component={PlaceholderScreen} />
          <Tab.Screen name="Statistics" component={PlaceholderScreen} />
          <Tab.Screen name="Settings">
            {() => <Settings setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
