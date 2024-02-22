import React, { useState, useEffect } from "react";
// import Van from "../components/Van";

export default function Vans() {
  // const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, []);

  return (
    <div>
      <h1>Vans Available for Rent</h1>
      {/* <div className="vans-container">
        {vans.map((van) => (
          <Van key={van.id} van={van} />
        ))}
      </div> */}
    </div>
  );
}
