import { Link } from "react-router-dom";
import "./Customs.css"


export default function Customs(props) {
  return (
    <>
      <div className="customs-list">
        
        {props.customs.map((custom) => (
          <div className="custom-details" key={custom.id}>
              <div>
                <h3>{custom.name}</h3>
              </div>
              <div>
                <p>{custom.rocker} {custom.height} {custom.volume} {custom.tail_width} </p>
              </div>
              <div>
                <img class="custom-board" alt="custom board" src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1633389075/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/customboard_bv4cbn.png"/>
              </div>
            
          <div className="buttons-container">
            <Link to={`/customs/${custom.id}/edit`}>
              <button id="b1" >EDIT</button>
            </Link>
            
            <button id="b1" onClick={() => props.handleCustomDelete(custom.id)}>
              DELETE
              </button>
            
            <button id="b1" >CART</button>
          </div>
          </div>
        ))}
      </div>
      </>
  );
}



// export default function Surfboards(props) {
//   return (
//     <>
     
//       <div className="surfboards-list">
      
//         {props.surfboards.map((surfboard) => (
//           <div className="surfboard-container">
//             <div className=" surfboards-name" key={surfboard.id}>
//               <h2>{surfboard.name}</h2>
//             </div>
//             <div className="surfboard">
//               <Link to={`/surfboards/${surfboard.id}`}>
//                 <img className="surfboard-image" src={surfboard.image_url} />
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
