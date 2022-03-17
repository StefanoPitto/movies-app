import React from 'react';
import {
  ScrollView,
  FlatList,
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Button,
} from 'react-native';
import {useMovieCast} from '../hooks/useMovieCast';
import {Movie} from '../interfaces/movieInterfaces';
import {CastItem} from './CastItem';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

interface Props {
  movie: Movie;
}

export const CastSlider = ({movie}: Props) => {
  const {isLoading, movieCast} = useMovieCast({id: movie.id});
  const navigation = useNavigation();
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
      }}>
      <Text style={styles.headline}>Cast</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.buttonStyle}>
        <Icon name="arrow-back-outline" size={50} color="#ffffff" />
      </TouchableOpacity>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={{marginBottom: 20}}
          data={movieCast}
          renderItem={({item}: any) => <CastItem cast={item} />}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headline: {
    fontSize: 40,
    color: '#ffffff',
    margin: 20,
  },
  buttonStyle: {
    color: '#ffffff',
    position: 'absolute',
    top: 24,
    left: 24,
  },
});
