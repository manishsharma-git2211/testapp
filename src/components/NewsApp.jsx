import React, { useEffect } from "react";
import Card from "../components/Card";
import { useState } from "react";

function Newsapp() {
  const [search, setSearch] = useState("india");
  const [newsdata, setNewsdata] = useState();

  const API_KEY = "7bfab581ac9a43759c1c9be5b597ac85";

  const getData = async () => {
    const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`,
      ),
      jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsdata(jsonData.articles);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const userInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <nav className="bg-blue-200 flex h-16  justify-between gap-8 items-center p-8">
        <div>
          <h1 className="text-2xl">Trendy News</h1>
        </div>

        <ul>
          <a>All Trending News</a>
        </ul>

        {/* Input */}
        <div className="flex ">
          <input
            onChange={handleInput}
            type="text"
            value={search}
            placeholder="Search news"
            className="border shadow-2xl px-2 py-1"
          />

          {/* Search Button */}
          <button
            onClick={getData}
            className="bg-blue-500 text-white rounded px-4 py-1 cursor-pointer hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </nav>

      <div className=" p-2 flex justify-center gap-16 mt-4">
        <button
          onClick={userInput}
          value="Sports"
          className="bg-amber-300 px-2 py-1 rounded-lg hover:bg-amber-500 cursor-pointer"
        >
          Sports
        </button>
        <button
          onClick={userInput}
          value="Politics"
          className="bg-amber-300 px-2 py-1 rounded-lg hover:bg-amber-500 cursor-pointer"
        >
          Politics
        </button>
        <button
          onClick={userInput}
          value="Entertainment"
          className="bg-amber-300 px-2 py-1 rounded-lg hover:bg-amber-500 cursor-pointer"
        >
          Entertainment
        </button>
        <button
          onClick={userInput}
          value="Health"
          className="bg-amber-300 px-2 py-1 rounded-lg hover:bg-amber-500 cursor-pointer"
        >
          Health
        </button>
        <button
          onClick={userInput}
          value="Fitness"
          className="bg-amber-300 px-2 py-1 rounded-lg hover:bg-amber-500 cursor-pointer"
        >
          Fitness
        </button>
      </div>

      {/* Card Component */}
      <div className="mt-6 px-2">
        {newsdata ? <Card data={newsdata} /> : null}
      </div>
    </div>
  );
}

export default Newsapp;
