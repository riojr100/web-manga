const API_ENDPOINT = "https://manga-api-omega.vercel.app";
export const getMangaList = async (query) => {
  const list = await fetch(`${API_ENDPOINT}/manga/mangadex/${query}`);
  return list.json();
};

export const getMangaImg = async (query) => {
  const img = await fetch(`${API_ENDPOINT}/manga/mangadex/info/${query}`);
  return img.json();
};
