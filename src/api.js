// const API_ENDPOINT = "https://api.consumet.org";
// const API_ENDPOINT = "https://manga-api-omega.vercel.app"; //api yg akan dipakai jika tidak work

const API_ENDPOINT = "https://api-uas-tau.vercel.app";

export const getMangaList = async (query) => {
  const list = await fetch(`${API_ENDPOINT}/manga/mangadex/${query}`);
  return list.json();
};

export const getMangaInfo = async (query) => {
  const img = await fetch(`${API_ENDPOINT}/manga/mangadex/info/${query}`);
  return img.json();
};

export const getMangaRecommendation = async () => {
  const list = await fetch(`${API_ENDPOINT}/manga/recommendation`);
  return list;
};

// const url = "https://api.jikan.moe/v4";
// export const getMangaList = async (query) => {
//   const response = await fetch(`${url}/manga/?q=${query}`);
//   const result = await response.json();
//   return result;
// };
// export const getMangaInfo = async (query) => {
//   const img = await fetch(`${url}${query}`);
//   return img.json();
// };

// export const getRecommendedManga = async () => {
//   const response = await fetch(`${url}/recommendations/manga?page=1`);
//   const result = await response.json();
//   return response;
// };
// https://rapidapi.com/felixeschmittfes/api/myanimelist
