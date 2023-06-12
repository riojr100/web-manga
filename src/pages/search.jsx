import React, { useEffect, useState } from "react";
import Header from "../component/header";
import SearchCard from "../component/searchCard";
import "../style.css";

import { getMangaList } from "../api";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [mangaList, setMangaList] = useState([]);
  // useEffect(() => {
  //   getMangaList(searchValue.toString()).then((res) => {
  //     setMangaList(res.data);
  //   });
  // }, [searchValue]);

  const searchHandler = () => {
    getMangaList(searchValue.toString())
      .then((res) => res.json())
      .then((data) => {
        setMangaList(data.data);
      });
  };

  const RenderMangaList = () => {
    if (mangaList) {
      return mangaList.map((key, index) => {
        return (
          <SearchCard
            key={index}
            title={key.title}
            id={key.mal_id}
            image={key.images.jpg.image_url}
          />
        );
      });
    }
  };
  return (
    <React.StrictMode>
      <Header />

      <div className="dimScreen-search"></div>
      <div className="container-search">
        {/* <div
          style={{
            height: 100,
            width: 10,
            backgroundColor: "black",
          }}
        ></div> */}
        <div className="searchForm">
          <input
            type="text"
            className="searchBar"
            placeholder="Search here..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            title="Search manga info here."
          ></input>
          <button className="searchButton" onClick={() => searchHandler()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
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
