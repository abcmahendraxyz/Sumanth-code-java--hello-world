"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarRating = () => {
  const [selected, setSelected] = useState<any>(null);
  const [hover, setHover] = useState<any>(null);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20%",
      }}
    >
      {[...Array(5)].map((element, index: any) => {
        const rating = index + 1;
        return (
          <div>
            <FontAwesomeIcon
              icon={faStar}
              color={`${rating <= (hover || selected) ? "orange" : "gray"}`}
              width={"100%"}
              height={"100%"}
              onClick={() => setSelected(rating)}
              onMouseEnter={() => setHover(rating)}
              onMouseLeave={() => setHover(null)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
