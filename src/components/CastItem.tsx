import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';
import {style} from '../style/StyleSheet';

interface Props {
  cast: Cast;
}

export const CastItem = ({cast}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${cast.profile_path}`;
  console.log(uri);
  return (
    <View style={styles.container}>
      <Image source={{uri}} style={styles.img} />
      <Text style={styles.textName}>{cast.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  img: {
    alignContent: 'center',
    width: 55,
    height: 55,
  },
  textName: {
    color: '#5f5f5f',
    margin: 10,
  },
});
