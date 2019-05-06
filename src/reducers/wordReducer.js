import {
  SET_WORD,
  SET_WORD_SUCCESS,
  SET_WORD_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  error: '',
  loading: false,
  text: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_WORD_SUCCESS:
      return {
        ...state,
        error: '',
        loading: false,
        text: action.payload.word,
      };
    case SET_WORD_FAIL:
      return { ...state, error: action.payload, loading: false };
    case SET_WORD:
      return {
        ...state, loading: true, error: '',
      };
    default:
      return state;
  }
};