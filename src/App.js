import React, { useEffect, useState } from "react";
import "./App.css";
import Image from "./components/image";
import Youtube from "./components/youtube";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Title, AppDiv,Text, MainDiv,Input,Headling} from "./components/style";
import Example from "./components/Texttt";



function App() {

  const [data, setData] = useState(" ");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [arr, setArr]= useState([]);

  const changeHandler = (event) => {
    setDate(event.target.value);
    console.log(event.target.value)
  };

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=QFaCppKeHQii5q5xKicdJNs257v6AKH9xgYoRFqv&date=" + date)
      .then(res => {
        setArr (res.data[0])
        setData(res.data);
      });
  }, [date]);

  return (
    <AppDiv className="App">
      <Headling> NASA</Headling>
      <Input type="date" value={date} onChange={changeHandler} />
      <Title>{data.title}</Title>
      <MainDiv className="Main">
      {data.media_type == "image"
        ? <Image dataurl={data.url} />
        : <Youtube dataurl={data.url} />}
      <Text>{data.explanation}</Text>
      </MainDiv>
      <p className="date" style={{color: "white"}}>{data.date} </p>
    </AppDiv>
  );
}

export default App;
