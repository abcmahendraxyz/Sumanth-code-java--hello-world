"use client";
import React, { useState, useRef, useEffect } from "react";

let timer: any;
const SearchInput = () => {
  const [query, setQuery] = useState<any>("");
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState<any>(1);
  const [loading, setLoading] = useState<any>(false);
  const [more, setHasMore] = useState<any>();

  const controllerRef = useRef<any>(null);
  const observer = useRef<any>();

  const lastElement = (node: any) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && more) {
        setPage((prevNumber: any) => prevNumber + 1);
      }
    });

    if (node) observer.current.observe(node);
  };

  const getData = async () => {
    setLoading(true);
    if (controllerRef.current) controllerRef.current.abort();
    controllerRef.current = new AbortController();
    const promise = await fetch(
      "https://openlibrary.org/search.json?" +
        new URLSearchParams({
          q: query,
          page: page,
        }),
      { signal: controllerRef.current.signal }
    );
    const fetchData = await promise.json();
    setLoading(false);
    setHasMore(fetchData.docs.length > 0);
    setData((prevBooks: any) => {
      return [
        ...new Set([
          ...prevBooks,
          ...Array.from(fetchData.docs, (b: any) => b.title),
        ]),
      ];
    });
  };

  useEffect(() => {
    getData();
  }, [query, page]);

  const handleChange = (e: any) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      setQuery(e);
      setPage(1);
    }, 1000);
  };
  return (
    <div>
      <div>
        <input
          style={{ border: "1px solid red" }}
          placeholder="searchInput"
          type="search"
          name="search"
          id=""
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      {data.map((book: any, index: any): any => {
        if (data.length === index + 1) {
          return (
            <div className="searchtitle" ref={lastElement} key={book}>
              {book}
            </div>
          );
        } else {
          return (
            <div className="searchtitle" key={book}>
              {book}
            </div>
          );
        }
      })}

      <div>{loading && "Loading..."}</div>
    </div>
  );
};

export default SearchInput;
