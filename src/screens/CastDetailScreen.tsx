import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CastSlider} from '../components/CastSlider';
import {Movie} from '../interfaces/movieInterfaces';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigator/Navigator';
import LinearGradient from 'react-native-linear-gradient';

interface Props extends NativeStackScreenProps<RootStackParams, any> {}

export const CastDetailScreen = ({route}: Props) => {
  const movie = route.params as Movie;
  return (
    <View>
      <LinearGradient
        colors={['#000000', '#121216']}
        style={{...StyleSheet.absoluteFillObject}}
      />
      <CastSlider movie={movie} />
    </View>
  );
};
