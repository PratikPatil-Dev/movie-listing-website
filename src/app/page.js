"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Components/Cards/Cards";
import SearchBox from "./Components/SearchBox/SearchBox";
import Styles from "./Styles.module.css";
import "./globals.css";

export default function Home() {
  let [data, setData] = useState([]);

  useEffect(() => {
    const apiData = async () => {
      let response = await axios.get(
        "https://www.omdbapi.com/?apikey=45f0782a&s=war"
      );
      setData(response.data.Search);
    };

    apiData();
  }, []);
  return (
    <main className={Styles.main}>
      <SearchBox />
      <div className={Styles.container}>
        {data.length > 0 &&
          data.map((item, idx) => <Cards apiData={item} key={idx} />)}
      </div>
    </main>
  );
}
