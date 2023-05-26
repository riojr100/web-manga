const API_ENDPOINT = "https://manga-api-omega.vercel.app";
// const API_ENDPOINT = "https://api.consumet.org";

export const getMangaList = async (query) => {
  const list = await fetch(`${API_ENDPOINT}/manga/mangadex/${query}`);
  return list.json();
};

export const getMangaInfo = async (query) => {
  const img = await fetch(`${API_ENDPOINT}/manga/mangadex/info/${query}`);
  return img.json();
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
