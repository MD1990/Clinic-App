
"use client";

import {useEffect,useState} from "react";

export default function Page(){
  const [data,setData]=useState([]);

  useEffect(()=>{
    fetch("/api/appointments").then(r=>r.json()).then(setData);
  },[]);

  const now = new Date();
  const urgent = data.filter(a=> new Date(a.date)<now && !a.confirmed);

  return (
    <div>
      <h1>Live Desk</h1>

      <div style={{background:"#1f2937",padding:20,borderRadius:10}}>
        <h2>🚨 Urgent</h2>
        {urgent.map(p=>(
          <div key={p.id}>
            {p.name} 
            <button style={{marginLeft:10,background:"#25D366"}}>
              WhatsApp
            </button>
          </div>
        ))}
      </div>

      <div style={{marginTop:20}}>
        💰 Saved Today: ${urgent.length * 50}
      </div>
    </div>
  )
}
