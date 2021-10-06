// import Layout from "../../layouts/Layout1";
import React from "react";

export default function Surfboards(props) {
  return (
    <div>
        {/* <h3>SURFBOARDS</h3> */}
        {props.surfboards.map((surfboard) => (
          <p key={surfboard.id}>{surfboard.name}</p>
        ))}
    </div>
  );


  
}
