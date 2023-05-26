import React, { useEffect, useState } from "react";

import Header from "../component/header";
import SearchCard from "../component/searchCard";
import "../style.css";

import { getMangaList, searchManga } from "../api";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [mangaList, setMangaList] = useState([]);
  useEffect(() => {
    getMangaList("a").then((res) => {
      setMangaList(res.results);
    });
  }, []);

  const RenderMangaList = () => {
    useEffect(() => {
      if (mangaList) {
        mangaList.map((key, index) => {
          console.log(key.id);
          return <SearchCard key={index} title={key.title} id={key.id} />;
        });
      }
    }, []);
  };

  // function handleClick(val) {
  //   setArrayValue(getMangaList(val));
  //   // const API_ENDPOINT = "https://manga-api-omega.vercel.app";
  //   // console.log(val);
  //   // fetch(`${API_ENDPOINT}/manga/mangadex/${val}`)
  //   //   .then((data) => data.json())
  //   //   .then((data) => {
  //   //     setArrF(data.results);
  //   //   });
  // }
  return (
    <React.StrictMode>
      <Header />

      <div className="dimScreen"></div>
      <div className="container-search">
        <div className="searchForm">
          <input
            type="text"
            className="searchBar"
            placeholder="Search here..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            title="Search manga info here."
          ></input>
          <button
            type="submit"
            className="searchButton"
            onClick={() => {
              // handleClick()
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="13"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
        <div className="searchContent">
          <RenderMangaList />
        </div>
      </div>
    </React.StrictMode>
  );
}
