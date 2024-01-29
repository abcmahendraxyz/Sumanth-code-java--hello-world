"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

type ImageSlide = {
  id: number;
  imageUrl: string;
  caption: string;
};

const imageSlides: ImageSlide[] = [
  {
    id: 1,
    imageUrl:
      "https://imgs.search.brave.com/r_FMqRt2zZ79Dvkz-HmWseJ62K5lirLZ3TomYLeCKkY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MTk5NDQ1MTg4OTUt/ZjA4YTEyZDZkZmQ1/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4TVRW/OGZHMXZZbWxzWlh4/bGJud3dmSHd3Zkh4/OE1BPT0mdz0xMDAw/JnE9ODA",
    caption: "Image 1 Caption",
  },
  {
    id: 2,
    imageUrl:
      "https://imgs.search.brave.com/xXZ3UV42uymrDSkw1J6tffWjw1p064HBpMmN6c2cTfo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MjU1OTg5MTIwMDMt/NjYzMTI2MzQzZTFm/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4TW54/OGNHaHZibVY4Wlc1/OE1IeDhNSHg4ZkRB/PSZ3PTEwMDAmcT04/MA",
    caption: "Image 2 Caption",
  },
  {
    id: 3,
    imageUrl:
      "https://imgs.search.brave.com/y30KfD5BprV3EYibpNC7-PjnrxOolBOteCa8XKGl60M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MTI0Mjg1NTkwODct/NTYwZmE1Y2VhYjQy/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4TVRa/OGZHMXZZbWxzWlh4/bGJud3dmSHd3Zkh4/OE1BPT0mdz0xMDAw/JnE9ODA",
    caption: "Image 3 Caption",
  },
  {
    id: 4,
    imageUrl:
      "https://imgs.search.brave.com/aFzcPipUDkGg62a5lDGXeMCUGhEQVmGRq0p8YTs-5wE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/ODczNjA0NDA4ODYt/ZjIyMGYxMzdhMTZj/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREY4TUh4/elpXRnlZMmg4TVRW/OGZIQm9iMjVsZkdW/dWZEQjhmREI4Zkh3/dyZ3PTEwMDAmcT04/MA",
    caption: "Image 4 Caption",
  },
  {
    id: 5,
    imageUrl:
      "https://imgs.search.brave.com/swwKNs-9QubShvTItR0jWerCrnnk2ua5e_ip_Bo7hkw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/ODA2OTQzMTMxNDEt/ZmNlNWU2OTdlZTI1/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4TVRS/OGZHMXZZbWxzWlh4/bGJud3dmSHd3Zkh4/OE1BPT0mdz0xMDAw/JnE9ODA",
    caption: "Image 5 Caption",
  },
];

const Page = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousHandler = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageSlides.length - 1 : prevIndex - 1
    );
  };

  const forwardHandler = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageSlides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      forwardHandler();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [currentImageIndex]);

  const currentImage = imageSlides[currentImageIndex];

  return (
    <div className="flex  items-center">
      <button
        className="w-20 py-2 bg-red-400 rounded mx-2"
        onClick={previousHandler}
      >
        Prev
      </button>
      <div className="pt-20 transition ease-in-out delay-150">
        <Link href={`/slider/${currentImage.id}`}>
          <img
            src={currentImage.imageUrl}
            alt={currentImage.caption}
            className=" transition ease-in-out"
          />
        </Link>
      </div>
      <button
        className="w-20 py-2 bg-red-400 rounded mx-2"
        onClick={forwardHandler}
      >
        Next
      </button>
    </div>
  );
};

export default Page;
