
"use client";
import {useState} from "react";

export default function QuickBook(){
  const [name,setName]=useState("");

  async function book(){
    await fetch("/api/appointments",{
      method:"POST",
      body:JSON.stringify({
        name,
        date:new Date().toISOString(),
        confirmed:false
      })
    });

    alert("Booked");
  }

  return (
    <div>
      <h1>Quick Book</h1>
      <input onChange={e=>setName(e.target.value)} placeholder="Name"/>
      <button onClick={book}>Book</button>
    </div>
  )
}
