
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOneSurfboard } from '../../services/surfboards';
import './SurfboardDetail.css'

export default function SurfboardDetail(props) {
  const [surfboard, setSurfboard] = useState({})
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    console.log(id)
    const fetchSurfboard = async () => {
      const surfboardData = await getOneSurfboard(id)
      console.log(surfboardData)
      setLoaded(true)
      setSurfboard(surfboardData)
    }
    fetchSurfboard()
  }, [id])

  
  return (
    <div className="details-container">
      <div className="surfboard-image">
        <h1>{surfboard.name}</h1>
        <img className="board-image" src={surfboard.image_url} alt="surfboard" />
      </div>
      <div className="surfboard-description">
        <h2>DESCRIPTION</h2>
        <p>{surfboard.description}</p>
        <h2>DIMENSIONS</h2>
        <p>{surfboard.dimensions}</p>
        <h2>PRICE</h2>
        <h3>{surfboard.price}</h3>
      </div>
    </div>
  )
}
        
        
      
      
      
