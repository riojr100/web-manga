const API_ENDPOINT = "https://manga-api-omega.vercel.app";
// const API_ENDPOINT = "https://api.consumet.org";

export const getMangaList = async (query) => {
  const list = await fetch(`${API_ENDPOINT}/manga/mangahere/${query}`);
  return list.json();
};

export const getMangaInfo = async (query) => {
  const img = await fetch(`${API_ENDPOINT}/manga/mangahere/info/${query}`);
  return img.json();
};

// const url = "https://myanimelist.p.rapidapi.com/manga/";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "7a90b8c6cbmshfcdbc27009f9a8dp184bc9jsn540585b0611a",
//     "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
//   },
// };

// https://rapidapi.com/felixeschmittfes/api/myanimelist
