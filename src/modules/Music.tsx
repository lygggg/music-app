import * as musicAPI from "../services/MusicService";

const GET_MUSIC = "GET_MUSIC";
const GET_MUSIC_SUCCESS = "GET_MUSIC_SUCCESS";
const GET_MUSIC_ERROR = "GET_MUSIC_ERROR";

export const getMusic = () => async (dispatch) => {
  dispatch({ type: GET_MUSIC });
  try {
    const music = await musicAPI.getMusic();
    dispatch({ type: GET_MUSIC_SUCCESS, music });
  } catch (e) {
    dispatch({ type: GET_MUSIC_ERROR, error: e });
  }
};

const initialState = {
  music: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function music(state = initialState, action) {
  switch (action.type) {
    case GET_MUSIC:
      return {
        ...state,
        music: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_MUSIC_SUCCESS:
      return {
        ...state,
        music: {
          loading: true,
          data: action.music,
          error: null,
        },
      };
    case GET_MUSIC_ERROR:
      return {
        ...state,
        music: {
          loading: true,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
