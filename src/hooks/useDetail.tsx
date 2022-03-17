import React, {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {CreditsResponse} from '../interfaces/creditsInterface';
import {DetailsResponse} from '../interfaces/movieDetailsInterface';

interface Props {
  id: number;
}

export const useDetail = ({id}: Props) => {
  const [movieDetail, setMovieDetail] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const getDetails = async () => {
    const response = await movieDB.get<DetailsResponse>(`/${id}/credits`);
    console.log(response.data);
    setMovieDetail(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getDetails();
  }, []);
  return {
    movieDetail,
    isLoading,
  };
};
