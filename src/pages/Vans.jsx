import React, { useState, useEffect } from "react";
// import Van from "../components/Van";

export default function Vans() {
  const [vans, setVans] = useState([])
  useEffect(() => {
      fetch("/api/vans")
          .then(res => res.json())
          .then(data => setVans(data.vans))
  }, [])
  
  console.log(vans)
  
  return (
      <h1>Vans page goes here 🚐</h1>
  )
}
