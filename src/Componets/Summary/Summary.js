import React, { useContext, useEffect, useState } from "react";
import ReactModal from "react-modal";
import { AppState } from "../../Context/Appstate";

import "./summary.css";
import Form from "../Form/Form";
const Summary = (props) => {
  const showSum = useContext(AppState);
  const setShowSum = useContext(AppState);
  const [booktkt, setbooktkt] = useState(false);

  return (
    <div>
      <ReactModal
        isOpen={showSum}
        contentLabel="Example Modal"
        onRequestClose={() => setShowSum(false)}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#000000ba",
          },
          content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#dcdcdc",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
            inset: "95px",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <div className="sum-img">
          <img src={props.image} />
        </div>
        <p className="sum-txt">{props.summary}</p>

        <button
          className="btn-ticket"
          onClick={() => {
            setbooktkt(true);
          }}
        >
          Book Ticket
        </button>
      </ReactModal>
      {booktkt && <Form name={props.name} />}
    </div>
  );
};

export default Summary;
