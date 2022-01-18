import { getMusic as apiGetMusic } from "../apis/Music";

export const getMusic = async () => {
  try {
    return await apiGetMusic();
  } catch (e) {
    alert(e);
  }
};
