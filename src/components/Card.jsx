import React from "react";
import hero from "../assets/hero.png";

function Card({ data }) {
  console.log(data);

  const readMore = (url) => {
    window.open(url);
  };

  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 px-4">
      {data?.map((curItem, index) => {
        return (
          <div className="border border-gray-300" key={index}>
            <img
              src={curItem.urlToImage}
              onError={(e) => {
                e.target.src = hero;
              }}
            />

            <div className="p-2">
              <a
                onClick={() => readMore(curItem.url)}
                className="font-bold cursor-pointer py-6 hover:underline transition"
              >
                {curItem.title}
              </a>

              <p className="py-2">{curItem.description}</p>

              <button
                onClick={() => readMore(curItem.url)}
                className="bg-blue-500 text-white rounded px-2 py-1 cursor-pointer hover:bg-blue-700"
              >
                Read More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
