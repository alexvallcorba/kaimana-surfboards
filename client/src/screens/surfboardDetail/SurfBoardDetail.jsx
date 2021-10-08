
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOneSurfboard } from '../../services/surfboards';


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
    <div className="surfboard-detail">
      <div className="surfboard-name">
        <h3>{surfboard.name}</h3>
      </div>
      <div className="surfboard-image">
        <img src={surfboard.image_url} alt="surfboard" />
      </div>
      <div className="surfboard-description">
        <p>{surfboard.description}</p>
      </div><div className="surfboard-dimensions">
        <p>{surfboard.dimensions}</p>
      </div><div className="surfboard-price">
        <p>{surfboard.price}</p>
      </div>
    </div>
  )
}
      
