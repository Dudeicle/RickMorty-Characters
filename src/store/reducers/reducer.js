//import  actions from actions import { * as ACTIONS} from
import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAIL,
} from "../actions/actionIndex";

export const initialState = {
  characters: [],
  isloading: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // below is the characters fetch
    case FETCH_CHARACTERS_START:
      return {
        ...state,
        isloading: true,
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        isloading: false,
        characters: [...state.characters, action.payload],
      };
    case FETCH_CHARACTERS_FAIL:
      return {
        ...state,
        isloading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
