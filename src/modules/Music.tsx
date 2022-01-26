import * as musicAPI from "../services/MusicService";

const GET_MUSIC = "GET_MUSIC"; // 요청 시작
const GET_MUSIC_SUCCESS = "GET_MUSIC_SUCCESS"; // 요청 성공
const GET_MUSIC_ERROR = "GET_MUSIC_ERROR"; // 요청 실패

export const getMusic = () => async (dispatch) => {
  dispatch({ type: GET_MUSIC }); // 요청이 시작됨
  try {
    const music = await musicAPI.getMusic(); // API 호출
    dispatch({ type: GET_MUSIC_SUCCESS, music }); // 성공
  } catch (e) {
    dispatch({ type: GET_MUSIC_ERROR, error: e }); // 실패
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
