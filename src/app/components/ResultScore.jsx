"use client";
import { useState, useEffect } from "react";

function ResultScore({ data }) {
  const [value, setValue] = useState(0);
  const divStyle = {
    background: `conic-gradient(color-mix(in hsl, red, green calc(${value} * 1%)) ${value * 3.6}deg, var(--colors-brand-beige-00) 0deg)`,
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
      <div style={divStyle} className="w-[250px] aspect-square rounded-full"></div>
      <div className="bg-beige w-[200px] aspect-square rounded-full absolute"></div>
      <p className="absolute text-2xl ">{value}%</p>
    </figure>
  );
}

export default ResultScore;