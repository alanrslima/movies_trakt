import { apiTrakt, apiTmdb } from "~/services/Api";
import { asyncForEach } from '~/utils';
import moment from 'moment';
import 'moment/locale/eu';

// Action Types
export const Types = {
  RESET_CASH_LOAD: 'reset_cash_load',
  GET_MOVIES_TRENDING: 'get_movies_trending',
  GET_MOVIES_POPULAR: 'get_movies_popular',
  GET_MOVIES_UPDATES: 'get_movies_updates',
  GET_MOVIES_COLLECTED: 'get_movies_collected',
};


// Reducer
const INITIAL_STATE = {
  cashLoad: 0,
  trendings: [],
  popular: [],
  updates: [],
  collected: [],
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.RESET_CASH_LOAD:
      return ({ ...state, cashLoad: 0 })
    case Types.GET_MOVIES_TRENDING:
      return ({ ...state, trendings: action.payload, cashLoad: state.cashLoad + 1 });
    case Types.GET_MOVIES_POPULAR:
      return ({ ...state, popular: action.payload, cashLoad: state.cashLoad + 1 });
    case Types.GET_MOVIES_UPDATES:
      return ({ ...state, updates: action.payload, cashLoad: state.cashLoad + 1 });
    case Types.GET_MOVIES_COLLECTED:
      return ({ ...state, collected: action.payload, cashLoad: state.cashLoad + 1 });
    default:
      return state;
  };
};


export const getMovies = () => {
  return async dispatch => {
    try {
      dispatch({ type: Types.RESET_CASH_LOAD });
      dispatch(getPopularMovies());
      dispatch(getTrendingMovies());
      dispatch(getUpdatesdMovies());
      dispatch(getCollectedMovies());
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
          data.push({ movie: item.movie, images: resTmdb.data.backdrops });
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
          data.push({ movie: item, images: resTmdb.data.backdrops });
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
          data.push({ movie: item.movie, images: resTmdb.data.backdrops });
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
          data.push({ movie: item.movie, images: resTmdb.data.backdrops });
        } catch (error) { }
      });
      dispatch({ type: Types.GET_MOVIES_COLLECTED, payload: data });
    } catch (error) {
      dispatch({ type: Types.GET_MOVIES_COLLECTED, payload: [] });
    }
  }
}