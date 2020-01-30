import { apiTrakt, apiTmdb } from "~/services/Api";
import { asyncForEach } from '~/utils';
import moment from 'moment';
import 'moment/locale/eu';

// Action Types
export const Types = {
  IS_LOADING: 'is_loading',
  GET_MOVIES_TRENDING_SUCESS: 'get_movies_trending_sucess',
  GET_MOVIES_POPULAR_SUCESS: 'get_movies_popular_sucess',
  GET_MOVIES_PLAYED_SUCESS: 'get_movies_played_sucess',
  GET_MOVIES_UPDATES_SUCESS: 'get_movies_updates_sucess'
};


// Reducer
const INITIAL_STATE = {
  isLoading: false,
  movies: [],

  trendings: [],
  popular: [],
  played: [],
  updates: [],
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_MOVIES_TRENDING_SUCESS:
      return ({ ...state, trendings: action.payload });
    case Types.GET_MOVIES_POPULAR_SUCESS:
      return ({ ...state, popular: action.payload });
    case Types.GET_MOVIES_UPDATES_SUCESS:
      return ({ ...state, updates: action.payload });
    default:
      return state;
  };
};


export const getMovies = () => {
  return async dispatch => {
    try {
      dispatch(getPopularMovies());
      dispatch(getTrendingMovies());
      dispatch(getUpdatesdMovies());
    } catch (error) {
      console.log(error)
    }
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
      dispatch({ type: Types.GET_MOVIES_TRENDING_SUCESS, payload: data });
    } catch (error) {
      console.log(error)
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
        } catch (error) {
        }
      });
      dispatch({ type: Types.GET_MOVIES_POPULAR_SUCESS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

// const getMorePlayedMovies = () => {
//   return async dispatch => {
//     try {
//       const resTrakt = await apiTrakt.get('played/weekly');
//       var data = [];
//       await asyncForEach(resTrakt.data, async item => {
//         try {
//           const resTmdb = await apiTmdb.get(`${item.ids.tmdb}/images`);
//           data.push({ movie: item, images: resTmdb.data.backdrops });
//         } catch (error) {
//         }
//       });
//     } catch (error) {

//     }
//   }
// }

const getUpdatesdMovies = () => {
  return async dispatch => {
    try {
      const date = moment().format('L');
      const resTrakt = await apiTrakt.get(`movies/updates/${date}`);
      var data = [];
      await asyncForEach(resTrakt.data, async item => {
        try {
          const resTmdb = await apiTmdb.get(`${item.movie.ids.tmdb}/images`);
          data.push({ movie: item.movie, images: resTmdb.data.backdrops });
        } catch (error) {}
      });
      dispatch({ type: Types.GET_MOVIES_UPDATES_SUCESS, payload: data });
    } catch (error) {
      console.log(error);
    }
  }
}