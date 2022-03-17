import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailMovieScreen} from '../screens/DetailMovieScreen';
import {Movie} from '../interfaces/movieInterfaces';
import {Cast} from '../interfaces/creditsInterface';
import {CastDetailScreen} from '../screens/CastDetailScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailMovieScreen: Movie;
  CastDetailScreen: Cast[];
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const SearchNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailMovieScreen" component={DetailMovieScreen} />
      <Stack.Screen name="CastDetailScreen" component={CastDetailScreen} />
    </Stack.Navigator>
  );
};
