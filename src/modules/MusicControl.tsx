const SET_CURRENTTIME = "CURRENTTIME";

// 액션 생성 함수
export const setCurrentTime = (time) => (dispatch) => {
  dispatch({ type: SET_CURRENTTIME, time });
};

// 초깃값 (상태가 객체가 아니라 그냥 숫자여도 상관 없습니다.)
const initialState = {
  musicControl: {
    time: 0,
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
    default:
      return state;
  }
}
