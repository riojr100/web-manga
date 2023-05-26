import React, { useEffect, useState } from "react";

import Header from "../component/header";
import SearchCard from "../component/searchCard";
import "../style.css";

import { getMangaList } from "../api";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [mangaList, setMangaList] = useState([]);
  useEffect(() => {
    getMangaList(searchValue.toString()).then((res) => {
      setMangaList(res.results);
    });
  }, [searchValue]);

  const RenderMangaList = () => {
    if (mangaList) {
      return mangaList.map((key, index) => {
        return <SearchCard key={index} title={key.title} id={key.id} />;
      });
    }
  };
  return (
    <React.StrictMode>
      <Header />

      <div className="dimScreen-search"></div>
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
        </div>
        <div className="searchContent">
          <RenderMangaList />
        </div>
      </div>
    </React.StrictMode>
  );
}
