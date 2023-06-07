import React, { useContext, useState } from "react";
import ReactModal from "react-modal";
import { AppState } from "../../Context/Appstate";

import "../../App.css";
const Form = (props) => {
  const setbooktkt = useContext(AppState);
  const booktkt = useContext(AppState);

  const [formData, setFormData] = useState({
    noT: 1,
    price: 200,
  });

  return (
    <div>
      <ReactModal
        isOpen={booktkt}
        contentLabel="Example Modal"
        onRequestClose={() => setbooktkt(false)}
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
        <div className="input-div">
          <label>Title</label>
          <input type="text" value={props.name} />
        </div>
        <div className="input-div">
          <label>No of Tickets:</label>
          <input
            type="numver"
            placeholder="Ex.0,1"
            value={formData.noT}
            onChange={(e) =>
              setFormData({
                noT: e.target.value,
                price: formData.price,
              })
            }
          />
        </div>
        <div className="input-div">
          <label>Ticket Price: </label>
          <input type="number" value={formData.price * formData.noT} />
        </div>

        <div className="input-div">
          <button onClick={() => setbooktkt(false)}>Pay</button>
        </div>
      </ReactModal>
    </div>
  );
};

export default Form;
