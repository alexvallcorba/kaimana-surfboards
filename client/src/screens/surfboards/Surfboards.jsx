// import Layout from "../../layouts/Layout1";
import React from "react";
import { Link } from 'react-router-dom'

export default function Surfboards(props) {
  return (
    <>
      <div>
        <h3>SURFBOARDS</h3>
      </div>
      {/* <div>
        {props.surfboards.map((surfboard) => (
          <p key={surfboard.id}>{surfboard.name}</p>
        ))}
      </div> */}
      {props.surfboards.map((surfboard) => (
        <div key={surfboard.id}>
          <Link to={`/surfboards/${surfboard.id}`}>
            <div className= 'surfboard-card'>
            {surfboard.image_url}
            <p>{surfboard.name}</p>
            </div>
          </Link>
       
        </div>
      ))}
    </>
  );
}
