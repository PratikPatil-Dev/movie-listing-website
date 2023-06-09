"use client";

import { useEffect, useState } from "react";
import Styles from "./Cards.module.css";

const Cards = (props) => {
  const { apiData } = props;

  const [showTitle, setShowTitle] = useState(false);

  const displayTitle = (val) => {
    setShowTitle(val);
  };

  return (
    <div
      className={Styles.card}
      onMouseEnter={() => displayTitle(true)}
      onMouseLeave={() => displayTitle(false)}
    >
      <div className={Styles.imgSec}>
        <img src={apiData.Poster} />
      </div>
      <div className={Styles.cardContent}>
        {showTitle && <p className={Styles.title}>{apiData.Title}</p>}
      </div>
    </div>
  );
};
export default Cards;
