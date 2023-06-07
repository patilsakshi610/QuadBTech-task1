import React, { useEffect, useState, createContext } from "react";
import "./App.css";
import axios from "axios";
import Card from "./Componets/Cards/Card.js";
import { AppState } from "./Context/Appstate.js";
import Summary from "./Componets/Summary/Summary";
import Header from "./Componets/Header/Header";
import Form from "./Componets/Form/Form";

function App() {
  const [data, setData] = useState();

  const [showSum, setShowSum] = useState(false);
  const [name, setName] = useState(0);
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");

  const fetchData = async () => {
    const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppState.Provider className="App" value={(showSum, setShowSum)}>
      <Header />
      {data?.map((e, i) => {
        return (
          <Card
            data={e}
            setName={setName}
            setSummary={setSummary}
            setImage={setImage}
          />
        );
      })}

      {showSum && <Summary name={name} summary={summary} image={image} />}
    </AppState.Provider>
  );
}

export default App;
