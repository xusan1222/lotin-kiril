// import { axios } from "axios";
import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./App.css";
import InputValue from "./InputValue.js";

export default function App() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [rates1, setRates1] = useState([]);
  const [rates2, setRates2] = useState([]);
  const [davlat1 , setDavlat1] = useState('UZS')
  const [davlat2 , setDavlat2] = useState('RUB')

  useEffect(() => {
    getData();
  }  , []);

  async function getData() {
    const result = await fetch(
      "https://freecurrencyapi.net/api/v2/latest?apikey=952ef2b0-9866-11ec-ad03-df52b703ec12"
    );
    const res = await result.json();
    console.log(res);
    setRates1(res.data);
    setRates2(res.data);
  }
  function Convert(){
    setValue2((value1*rates2[davlat2]/rates1[davlat1]).toFixed(2))

  }


  console.log('value1',value1);
  console.log('value2',value2);
  console.log('davlat1',davlat1);
  console.log('davlat1',davlat2);
  console.log('_________________')

  return (
   <div className="root">
      <h1 className="header">|CURRENCY CONVERTOR</h1>

<div className="div">
      
      <InputValue
        ValueChange={(e) => setValue1(e.target.value)}
        selectChange={(e)=>setDavlat1(e.target.value)}
        value={value1}
        sValue={davlat1}
        CountryValue={Object.keys(rates1)}
            />
        
      <InputValue
        selectChange={(e)=>setDavlat2(e.target.value)}
        value={value2}
        sValue={davlat2}
        CountryValue={Object.keys(rates2)}
      />
      <br/>
      <Button 
      className="button"
      variant="outlined"
      color="primary"
      onClick={Convert}
      >convert</Button>
      
    </div>
   </div>
    
  );
}
// https://freecurrencyapi.net/api/v2/latest?apikey=952ef2b0-9866-11ec-ad03-df52b703ec12
