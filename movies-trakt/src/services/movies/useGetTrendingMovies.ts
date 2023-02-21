import {useEffect, useState} from 'react';
import {Movie} from '../../types/Movie';
import {TrendingMovie} from '../../types/TrendingMovie';
import {apiTmdb} from '../apiTmdb';
import {apiTrakt} from '../apiTrakt';

export const useGetTrendingMovies = () => {
  const [data, setData] = useState<Movie[]>();

  const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    handle();
  }, []);

  async function getMovieImages(tmdbId: number) {
    try {
      const {data}: {data: Partial<Movie>} = await apiTmdb.get(`${tmdbId}`);
      return {...data, image_base: IMAGE_BASE};
    } catch (error) {}
  }

  async function handle() {
    try {
      const {data}: {data: TrendingMovie[]} = await apiTrakt.get(
        'movies/trending',
      );
      const response = await Promise.all(
        data.map(async item => {
          const details = await getMovieImages(item.movie.ids.tmdb);
          return {...item, ...details};
        }),
      );
      setData(response);
    } catch (error) {
      // dispatch({ type: Types.GET_MOVIES_POPULAR, payload: [] });
    }
  }

  return {data};
};
