/* eslint-disable import/prefer-default-export */
import api from '../services/api';
import {
  SET_WORD,
  SET_WORD_SUCCESS,
  SET_WORD_FAIL,
} from './types';

const setWord = () => ({
  type: SET_WORD,
});

const setWordSuccess = objWord => ({
  type: SET_WORD_SUCCESS,
  payload: objWord,
});

const setWordFail = objWord => ({
  type: SET_WORD_FAIL,
  payload: objWord,
});


export function postWord(text) {
  return (dispatch) => {
    dispatch(setWord());
    const obj = {
      word: text,
    };
    api.setWord(obj)
      .then((res) => {
        dispatch(setWordSuccess(res.data));
      })
      .catch(() => {
        dispatch(setWordFail('An Error Occurred, Please Try Again Later'));
      });
  };
}