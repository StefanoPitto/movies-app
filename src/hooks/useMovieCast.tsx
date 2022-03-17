import React, {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Cast, CreditsResponse} from '../interfaces/creditsInterface';
import {Movie} from '../interfaces/movieInterfaces';

interface Props {
  id: number;
}

export const useMovieCast = ({id}: Props) => {
  const [movieCast, setMovieCast] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getCast = async () => {
    const response = await movieDB.get<CreditsResponse>(`/${id}/credits`);
    setMovieCast(response.data.cast);
    setIsLoading(false);
  };

  useEffect(() => {
    getCast();
  }, []);

  return {
    movieCast,
    isLoading,
  };
};
