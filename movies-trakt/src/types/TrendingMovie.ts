import {Movie} from './Movie';

export type TrendingMovie = Movie & {
  watchers: number;
  movie: Movie;
};
