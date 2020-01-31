import { apiTrakt, apiTmdb } from "~/services/Api";
import { asyncForEach } from '~/utils';
import moment from 'moment';
import 'moment/locale/eu';

// Action Types
export const Types = {
  RESET_CASH_LOAD_MOVIES: 'reset_cash_load_movies',
  RESET_LOAD_DETAILS: 'reset_load_details',
  GET_MOVIES_TRENDING: 'get_movies_trending',
  GET_MOVIES_POPULAR: 'get_movies_popular',
  GET_MOVIES_UPDATES: 'get_movies_updates',
  GET_MOVIES_COLLECTED: 'get_movies_collected',
  GET_MOVIE_DETAILS: 'get_movie_details',
};


// Reducer
const INITIAL_STATE = {
  cashLoadMovies: 0,
  loadDetails: false,

  trendings: [],
  popular: [],
  updates: [],
  collected: [],
  details: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.RESET_CASH_LOAD_MOVIES:
      return ({ ...state, cashLoadMovies: 0 });
    case Types.RESET_LOAD_DETAILS:
      return ({ ...state, loadDetails: true, details: null });
    case Types.GET_MOVIES_TRENDING:
      return ({ ...state, trendings: action.payload, cashLoadMovies: state.cashLoadMovies + 1 });
    case Types.GET_MOVIES_POPULAR:
      return ({ ...state, popular: action.payload, cashLoadMovies: state.cashLoadMovies + 1 });
    case Types.GET_MOVIES_UPDATES:
      return ({ ...state, updates: action.payload, cashLoadMovies: state.cashLoadMovies + 1 });
    case Types.GET_MOVIES_COLLECTED:
      return ({ ...state, collected: action.payload, cashLoadMovies: state.cashLoadMovies + 1 });
    case Types.GET_MOVIE_DETAILS:
      return ({ ...state, details: action.payload, loadDetails: false });
    default:
      return state;
  };
};


// Action Creators
export const getMovies = () => {
  return async dispatch => {
    try {
      dispatch({ type: Types.RESET_CASH_LOAD_MOVIES });
      dispatch(getPopularMovies());
      dispatch(getTrendingMovies());
      dispatch(getUpdatesdMovies());
      dispatch(getCollectedMovies());
    } catch (error) { }
  }
}

export const getMovieDetail = id => {
  return async dispatch => {
    try {
      dispatch({ type: Types.RESET_LOAD_DETAILS });
      const resAbout = await apiTrakt.get(`movies/${id}?extended=full`);
      const resComments = await apiTrakt.get(`movies/${id}/comments/sort`);
      const data = {
        about: resAbout.data,
        comments: resComments.data
      };
      dispatch({ type: Types.GET_MOVIE_DETAILS, payload: data })
    } catch (error) { }
  }
}

const getTrendingMovies = () => {
  return async dispatch => {
    try {
      const resTrakt = await apiTrakt.get('movies/trending');
      var data = [];
      await asyncForEach(resTrakt.data, async item => {
        try {
          const resTmdb = await apiTmdb.get(`${item.movie.ids.tmdb}/images`);
          data.push({
            movie: { ...item.movie, id: item.movie.ids.trakt },
            images: resTmdb.data.backdrops,
          });
        } catch (error) { }
      });
      dispatch({ type: Types.GET_MOVIES_TRENDING, payload: data });
    } catch (error) {
      dispatch({ type: Types.GET_MOVIES_TRENDING, payload: [] });
    }
  };
}

const getPopularMovies = () => {
  return async dispatch => {
    try {
      const resTrakt = await apiTrakt.get('movies/popular');
      var data = [];
      await asyncForEach(resTrakt.data, async item => {
        try {
          const resTmdb = await apiTmdb.get(`${item.ids.tmdb}/images`);
          data.push({
            movie: { ...item, id: item.ids.trakt },
            images: resTmdb.data.backdrops,
          });
        } catch (error) { }
      });
      dispatch({ type: Types.GET_MOVIES_POPULAR, payload: data });
    } catch (error) {
      dispatch({ type: Types.GET_MOVIES_POPULAR, payload: [] });
    }
  };
}

const getUpdatesdMovies = () => {
  return async dispatch => {
    try {
      const date = moment().subtract(7, 'days').calendar();
      const resTrakt = await apiTrakt.get(`movies/updates/${date}`);
      var data = [];
      await asyncForEach(resTrakt.data, async item => {
        try {
          const resTmdb = await apiTmdb.get(`${item.movie.ids.tmdb}/images`);
          data.push({
            movie: { ...item.movie, id: item.movie.ids.trakt },
            images: resTmdb.data.backdrops,
          });
        } catch (error) { }
      });
      dispatch({ type: Types.GET_MOVIES_UPDATES, payload: data });
    } catch (error) {
      dispatch({ type: Types.GET_MOVIES_UPDATES, payload: [] });
    }
  }
}

const getCollectedMovies = () => {
  return async dispatch => {
    try {
      const resTrakt = await apiTrakt.get(`movies/collected`);
      var data = [];
      await asyncForEach(resTrakt.data, async item => {
        try {
          const resTmdb = await apiTmdb.get(`${item.movie.ids.tmdb}/images`);
          data.push({
            movie: { ...item.movie, id: item.movie.ids.trakt },
            images: resTmdb.data.backdrops,
          });
        } catch (error) { }
      });
      dispatch({ type: Types.GET_MOVIES_COLLECTED, payload: data });
    } catch (error) {
      dispatch({ type: Types.GET_MOVIES_COLLECTED, payload: [] });
    }
  }
}