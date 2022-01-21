const SET_CURRENTTIME = "CURRENTTIME";
const SELECT_MUSIC = "SELECT_MUSIC";

// 액션 생성 함수
export const setCurrentTime = (time) => (dispatch) => {
  dispatch({ type: SET_CURRENTTIME, time });
};

export const setSelectMusic = (music) => (dispatch) => {
  dispatch({ type: SELECT_MUSIC, music });
};

// 초깃값 (상태가 객체가 아니라 그냥 숫자여도 상관 없습니다.)
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
