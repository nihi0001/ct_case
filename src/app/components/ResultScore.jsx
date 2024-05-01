"use client";
import { useState, useEffect } from "react";

function ResultScore({ resultData }) {
  const [value, setValue] = useState(0);
  const [message, setMessage] = useState("");
  const divStyle = {
   /*background: `conic-gradient(orange ${value * 3.6}deg, gainsboro 0)`,*/
   /*background: `conic-gradient(#6C6A56 ${value * 3.6}deg, #d9D8C5 0)`,*/
   background: `conic-gradient(color-mix(in hsl, red, green calc(${value} * 1%)) ${value * 3.6}deg, gainsboro 0deg)`,
  
  };

  useEffect(() => {
    const counter = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue < resultData) {
          return prevValue + 1;
        } else {
          clearInterval(counter);
          return prevValue;
        }
      });
    }, 20);

    return () => clearInterval(counter);
  }, []);

  useEffect(() => {
    if (value > 70) {
      setMessage("Fantastisk! Dette website matcher kriterierne for et brugervenligt site");
    } else if (value > 50) {
      setMessage("Tæt på! Dette website har en middel webtilgængelighed.");
    } else {
      setMessage("Åh nej! Dette website lever ikke op til kravene for webtilgængelighed.");
    }
 
  }, [value]);
 
 
  useEffect(() => {
    console.log(message);
  }, [message]);
  
  return (
    <div className="flex flex-col items-center justify-center">
      <article>
        <figure className="place-self-center grid place-items-center relative">
          <div style={divStyle} className="w-[235px] aspect-square rounded-full"></div>
          <div className="bg-beige w-[200px] aspect-square rounded-full absolute"></div>
          <p className="absolute text-2xl ">{value}%</p>
        </figure>
      </article>
 
      <article>
        <p className=" mt-10 text-2xl max-w-[30rem] divide-x-2 divide-orange ">{message}</p>
      </article>
    </div>
 
 
  );
}
 
export default ResultScore;
