import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'c44c32b340417ee90ba082992f39e379',
    languange: 'es-ES',
  },
});

export default movieDB;
