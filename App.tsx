import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigator/Navigator';
import {GradientProvider} from './src/context/GradientProvider';

const App = () => (
  <NavigationContainer>
    <GradientProvider>
      <Navigator />
    </GradientProvider>
  </NavigationContainer>
);

export default App;
