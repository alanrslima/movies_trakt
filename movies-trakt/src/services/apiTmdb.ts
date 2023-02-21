import axios from 'axios';

export const apiTmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  headers: {
    'Content-type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdkM2M3N2I5Y2M1ZDA1MzdkOTQ2YjE1ZGE3ZTQ4NSIsInN1YiI6IjVlMmY1ZDJkYzU2ZDJkMDAxODRlZDY2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EpE5AHu8FpDE7dQ6z5aE9WBBtqqKPsPEwaiYx0olnU4',
  },
});
