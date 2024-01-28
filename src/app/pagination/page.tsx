"use client";
import React, { useState, useEffect } from "react";

const Pagination = () => {
  const [product, setProduct] = useState<any>([]);
  const [page, setPage] = useState<any>(1);

  const fetchData = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await res.json();

    if (data && data.products) {
      setProduct(data.products);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const selectPageHandler = (selectedPage: any) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= product.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <div>
      {product
        .slice(page * 10 - 10, page * 10)
        .map((element: any, index: any) => (
          <div key={index}>{element.title}</div>
        ))}
      <div>
        <button onClick={() => selectPageHandler(page - 1)}>prev</button>
        {[...Array(product.length / 10)].map((_, i) => {
          return (
            <span
              key={i}
              style={{
                margin: "5px",
                padding: "7px",
                border: "1px solid green",
                cursor: "pointer",
              }}
              className={page === i + 1 ? "pagination__selected" : ""}
              onClick={() => selectPageHandler(i + 1)}
            >
              {i + 1}
            </span>
          );
        })}
        <button onClick={() => selectPageHandler(page + 1)}>next</button>
      </div>
    </div>
  );
};

export default Pagination;
