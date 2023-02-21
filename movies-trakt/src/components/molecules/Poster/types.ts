import {Movie} from '../../../types/Movie';

export type PosterProps = {
  movie: Movie;
  height?: number | string;
  width?: number | string;
  size?: 'small' | 'medium' | 'large';
};
