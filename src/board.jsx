import { useState } from "react";

export default function Board()
{
    let [move,setMove]=useState([]);
    let btn=()=>
    {
setMove((prevMove)=>[...prevMove,"bluemve"]
  )  }
return (
    <>
    <h1>Game Begins</h1>
    <p>{move}</p>
    <button onClick={btn}>Click</button>
    </>
);
}