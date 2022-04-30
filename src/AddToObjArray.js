import React, { useState } from "react";

export default function AddToObjArray() {
  const [objArray, setObjArray] = useState([{ a: 1, b: 2 }]);
  const [aV, setA] = useState("");
  const [bV, setB] = useState("");
  console.log(aV, bV);
  console.log(objArray);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = { a: aV, b: bV };
    addObj(newObj);
    setA("");
    setB("");
  };
  const addObj = (obj) => {
    setObjArray((currentArray) => {
      return [obj, ...currentArray];
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={aV} onChange={(e) => setA(e.target.value)}></input>
        <input value={bV} onChange={(e) => setB(e.target.value)}></input>
        <button>AddObj</button>
      </form>
      {objArray.map((letter) => {
        return <p>V</p>;
      })}
    </>
  );
}
