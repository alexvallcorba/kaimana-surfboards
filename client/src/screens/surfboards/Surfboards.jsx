import React from "react";
import { Link } from 'react-router-dom'

export default function Surfboards(props) {
  return (
    <>
      <div className="surfboards-list">
        <h3>SURFBOARDS</h3>
      </div>
      
      {props.surfboards.map((surfboard) => (
        <div key={surfboard.id}>
          <Link to={`/surfboards/${surfboard.id}`}>
            <img src={surfboard.image_url}/>
          </Link>
            <p>{surfboard.name}</p>
        </div>
      ))}
    </>
  );
}
            
            
       
