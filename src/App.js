import React, { useEffect, useState } from "react";
import "./App.css";
import News from "./News";
import TableHeader from "./TableHeader";
import "./index.css";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const App = () => {
  const [newsFeed, setNews] = useState([]);
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [color] = useState("#ffffff");

  const getNews = async () => {
    setLoading(true);
    const response = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${query}&&tags=story`
    );
    const data = await response.json();
    setNews(data.hits);
    setLoading(false);
  };
  useEffect(() => {
    getNews(query);
  }, [query]);

  const runSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const override = css`
    display: block;
    margin: 0 auto;
    margin-top: 150px;
  `;

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={runSearch}
        />
        <button className="search-button" type="submit">
          {" "}
          Search{" "}
        </button>
      </form>
      <div className="newsTable">
        <h1 className="header"> Showing all news about {query}</h1>
        <TableHeader />
        {loading ? (
          <div className="sweet-loading">
            <ClipLoader
              color={color}
              loading={loading}
              css={override}
              size={150}
            />
          </div>
        ) : (
          <>
            {newsFeed.map((news) => (
              <News
                key={news.objectID}
                url={news.url}
                title={news.title}
                author={news.author}
                num_comments={news.num_comments}
              />
            ))}{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
