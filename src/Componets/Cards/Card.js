import React, { useEffect, useState, useContext } from "react";
import "./Card.css";
import striptags from "striptags";
import { AppState } from "../../Context/Appstate";

const Card = (props) => {
  const setShowSum = useContext(AppState);

  return (
    <div className="card">
      <div
        className="card-inner"
        onClick={() => {
          setShowSum(true);
          const a = props.data.show.summary;
          props.setName(props.data.show.name);
          props.setSummary(striptags(a));
          props.setImage(props.data?.show?.image?.original);
        }}
      >
        <div className="card-img">
          <img src={props.data?.show?.image?.original} />
        </div>

        <div className="card-details">
          <div className="card-info">
            <div className="card-title">{props?.data?.show?.name}</div>
            <p style={{ marginTop: "15px" }}>
              Geners: {props?.data?.show?.genres[0]},
              {props?.data?.show?.genres[1]}
            </p>
            <p>Language: {props?.data?.show?.language}</p>
            <p>Ratings: {props?.data?.show?.rating?.average}</p>
            <p>Schedule: {props?.data?.show?.schedule?.days[0]}</p>
            <p>Time: {props?.data?.show?.schedule?.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
