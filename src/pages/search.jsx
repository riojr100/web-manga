import React, { useEffect, useState } from "react";
import Header from "../component/header";
import SearchCard from "../component/searchCard";
import LoadingComp from "../component/loadingComp";
import EmptyComp from "../component/emptyComp";
import ErrorComp from "../component/errorComp";
import "../style.css";

import { getMangaList } from "../api";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [mangaList, setMangaList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isEmpty, setEmpty] = useState(false);
  const [isError, setError] = useState(false);
  // useEffect(() => {
  //   getMangaList(searchValue.toString()).then((res) => {
  //     setMangaList(res.data);
  //   });
  // }, [searchValue]);

  const searchHandler = (e) => {
    e.preventDefault();
    setEmpty(false);
    if (searchValue == "") {
      setEmpty(true);
    } else {
      setLoading(true);
      setError(false);
      getMangaList(searchValue.toString())
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setMangaList(data.data);
        })
        .catch((err) => {
          setError(true);
          setLoading(false);
          console.log(err);
        });
    }
  };

  const RenderMangaList = () => {
    if (mangaList) {
      return mangaList.map((key, index) => {
        return (
          <SearchCard
            keys={index}
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
        <form className="searchForm" onSubmit={(e) => searchHandler(e)}>
          <input
            type="text"
            className="searchBar"
            placeholder="Search here..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            title="Search manga info here."
          ></input>
          <button className="searchButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              // viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </form>
        <div className="searchContent">
          {isLoading && <LoadingComp />}
          {isEmpty && <EmptyComp />}
          {!isEmpty && !isLoading && !isError && <RenderMangaList />}
          {isError && <ErrorComp />}
        </div>
      </div>
    </React.StrictMode>
  );
}
