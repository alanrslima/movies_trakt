import { apiTrakt } from "~/services/Api";

// Action Types
export const Types = {
  IS_LOADING: 'is_loading',
  GET_MOVIES_TRENDING_SUCESS: 'get_movies_trending_sucess',
  GET_MOVIES_POPULAR_SUCESS: 'get_movies_popular_sucess',

};


// Reducer
const INITIAL_STATE = {
  isLoading: false,
  movies: [],

  trendings: [],
  popular: [],
  updates: [],
  summary: [],
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_MOVIES_TRENDING_SUCESS:
      return ({ ...state, trendings: action.payload });
    case Types.GET_MOVIES_POPULAR_SUCESS:
      return ({ ...state, popular: action.payload });
    default:
      return state;
  };
};


export const getMovies = () => {
  return async dispatch => {
    try {
        dispatch(getPopularMovies());
        dispatch(getTrendingMovies());
    } catch (error) {
      console.log(error)
    }
  }
}

const getTrendingMovies = () => {
  return async dispatch => {
    try {
      const res = await apiTrakt.get('movies/trending');
      dispatch({ type: Types.GET_MOVIES_TRENDING_SUCESS, payload: res.data });
    } catch (error) {
      console.log(error)
    }
  };
}

const getPopularMovies = () => {
  return async dispatch => {
    try {
      const res = await apiTrakt.get('movies/popular');
      dispatch({ type: Types.GET_MOVIES_POPULAR_SUCESS, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
}