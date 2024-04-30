"use client";
import { useState, useEffect } from "react";

function ResultScore({ data }) {
  const [value, setValue] = useState(0);
  const divStyle = {
   /*background: `conic-gradient(orange ${value * 3.6}deg, gainsboro 0)`,*/
   /*background: `conic-gradient(#6C6A56 ${value * 3.6}deg, #d9D8C5 0)`,*/
   background: `conic-gradient(color-mix(in hsl, red, green calc(${value} * 1%)) ${value * 3.6}deg, gainsboro 0deg)`,
  
  };

  useEffect(() => {
    const counter = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue < data) {
          return prevValue + 1;
        } else {
          clearInterval(counter);
          return prevValue;
        }
      });
    }, 20);

    return () => clearInterval(counter);
  }, []);

  return (
    <figure className="place-self-center order-first sm:order-none grid place-items-center relative">
      <div style={divStyle} className="w-[235px] aspect-square rounded-full"></div>
      <div className="bg-beige w-[200px] aspect-square rounded-full absolute"></div>
      <p className="absolute text-2xl ">{value}%</p>
    </figure>
  );
}

export default ResultScore;