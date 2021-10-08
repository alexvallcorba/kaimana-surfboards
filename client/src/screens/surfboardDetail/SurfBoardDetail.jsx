import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneSurfboard } from "../../services/surfboards";
import "./SurfboardDetail.css";

export default function SurfboardDetail(props) {
  const [surfboard, setSurfboard] = useState({});
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    const fetchSurfboard = async () => {
      const surfboardData = await getOneSurfboard(id);
      console.log(surfboardData);
      setLoaded(true);
      setSurfboard(surfboardData);
    };
    fetchSurfboard();
  }, [id]);

  return (
    <div className="details-container">
      <div className="surfboard-image">
        <h1>{surfboard.name}</h1>
        <img
          className="board-image"
          src={surfboard.image_url}
          alt="surfboard"
        />
      </div>
      <div className="surfboard-description">
        <div className="description"></div>
        <h3>DESCRIPTION</h3>
        <p>{surfboard.description}</p>

        <div className="dimensions"></div>
        <h3>DIMENSIONS</h3>
        <p>{surfboard.dimensions}</p>

        <div className="price"></div>
        <h3>PRICE</h3>
        <p>{surfboard.price}</p>
      </div>
    </div>
  );
}
