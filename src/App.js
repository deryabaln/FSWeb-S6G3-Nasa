import React, { useEffect, useState } from "react";
import "./App.css";
import Image from "./components/image";
import Youtube from "./components/youtube";
import axios from "axios";


function App() {

 const [data, setData] = useState(" ");
 const [date, setDate] = useState("2023-05-31");

 const changeHandler = (event)=>{
  setDate(event.target.value);
  console.log(event.target.value)
 };

  useEffect(()=>{
  axios.get("https://api.nasa.gov/planetary/apod?api_key=QFaCppKeHQii5q5xKicdJNs257v6AKH9xgYoRFqv&date=" + date)
    .then(res => {
      setData(res.data);
      console.log(res.data);
    })
    .catch(err => {
      console.log("Error", err);
    });
  }, [date]);

  return (
    <div className="App">
      <input type="date" value={date} onChange={changeHandler} />
      <h1>{data.title}</h1>
      {data.media_type == "image"
      ? <Image dataurl = {data.url} />
      : <Youtube dataurl = {data.url} />}
      <p className="explanation">
        {data.explanation}
      </p>
      <p className="date">
        {data.date}
      </p>
    </div>
  );
}

export default App;
