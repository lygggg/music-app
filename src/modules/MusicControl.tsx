const SET_CURRENTTIME = "CURRENT_TIME";
const SELECT_MUSIC = "SELECT_MUSIC";

export const setCurrentTime = (time) => (dispatch) => {
  dispatch({ type: SET_CURRENTTIME, time });
};

export const setSelectMusic = (music) => (dispatch) => {
  dispatch({ type: SELECT_MUSIC, music });
};

const initialState = {
  musicControl: {
    time: 0,
  },
  selectMusic: {
    object: { time: 1 },
  },
};

export default function MusicControl(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENTTIME:
      return {
        ...state,
        musicControl: {
          time: action.time,
        },
      };
    case SELECT_MUSIC:
      return {
        ...state,
        selectMusic: {
          object: action.music,
        },
      };
    default:
      return state;
  }
}
