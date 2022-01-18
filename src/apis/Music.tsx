import axios from "axios";

export const MUSIC_API_URL = `${import.meta.env.VITE_MUSIC_API}`;

export const getMusic = async (): Promise<any> => {
  try {
    const { data } = await axios.get(MUSIC_API_URL);
    return data;
  } catch (e) {
    if (confirm("retry ")) {
      return getMusic();
    }
    throw e;
  }
};
