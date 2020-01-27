// Action Types
export const Types = {
  GET_MOVIES_SUCESS: 'get_movies_sucess',
};


// Reducer
const INITIAL_STATE = {
  movies: [],
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_MOVIES_SUCESS:
      return { ...state, movies: action.payload };
    default:
      return state;
  };
};


// Action Creators
export function getMovies() {
  return {
    type: Types.GET_MOVIES_SUCESS,
    payload: [],
  }
}
