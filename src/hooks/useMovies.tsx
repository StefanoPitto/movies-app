import React, {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBResponse} from '../interfaces/movieInterfaces';

interface MovieState {
  nowPlaying: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
  popular: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [movies, setMovies] = useState<MovieState>({
    nowPlaying: [],
    topRated: [],
    upcoming: [],
    popular: [],
  });
  const getMovies = async () => {
    const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing');
    const popularPromise = movieDB.get<MovieDBResponse>('/popular');
    const topRatedPromise = movieDB.get<MovieDBResponse>('/top_rated');
    const upcomingPromise = movieDB.get<MovieDBResponse>('/upcoming');
    const response = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ])
      .then(resp => {
        return setMovies({
          nowPlaying: resp[0].data.results,
          topRated: resp[1].data.results,
          upcoming: resp[2].data.results,
          popular: resp[3].data.results,
        });
      })
      .catch(error => console.log(error));
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return {
    ...movies,
    isLoading,
  };
};
