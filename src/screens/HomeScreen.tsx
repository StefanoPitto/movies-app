import React, {useContext} from 'react';
import {Dimensions, ActivityIndicator, ScrollView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {MoviePoster} from '../components/MoviePoster';
import {GradientContext} from '../context/GradientProvider';
import {useMovies} from '../hooks/useMovies';
import {style} from '../style/StyleSheet';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {} = useContext(GradientContext);
  const {isLoading, nowPlaying, topRated, upcoming, popular} = useMovies();
  return isLoading ? (
    <ActivityIndicator style={style.loading} />
  ) : (
    <ScrollView>
      <Carousel
        data={nowPlaying}
        renderItem={({item}: any) => <MoviePoster movie={item} />}
        sliderWidth={windowWidth}
        itemWidth={300}
        getItem={(item, _) => {}}
      />
      <HorizontalSlider title="Top Rated" movies={topRated} />
      <HorizontalSlider title="Popular" movies={popular} />
      <HorizontalSlider title="Upcoming" movies={upcoming} />
    </ScrollView>
  );
};
