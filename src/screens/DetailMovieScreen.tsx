import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {MoviePoster} from '../components/MoviePoster';
import {Movie} from '../interfaces/movieInterfaces';
import {RootStackParams} from '../navigator/Navigator';

const width = Dimensions.get('screen').width;

interface Props
  extends NativeStackScreenProps<RootStackParams, 'DetailMovieScreen'> {}

export const DetailMovieScreen = ({route}: Props) => {
  const movie = route.params as Movie;
  const navigation = useNavigation<any>();
  console.log(movie.id);
  return (
    <View>
      <MoviePoster movie={movie} width={width} height={500} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.description}>{movie.overview}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('CastDetailScreen', movie)}
          style={styles.button}>
          <Text>Cast</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    padding: 20,
  },
  title: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    color: '#000000',
    fontSize: 16,
  },
  button: {
    margin: 10,
    width: 50,
    justifyContent: 'center',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#0073df',
    color: '#000000',
  },
});
