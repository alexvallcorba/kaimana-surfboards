import { Link } from "react-router-dom";

export default function Customs(props) {
  return (
    <div>
        <h3>CUSTOMS</h3>
        {props.customs.map((custom) => (
          <div key={custom.id}>
            <div classname="custom-details">
              <h3>{custom.name}</h3>
              <p>{custom.rocker} {custom.height} {custom.volume} {custom.tail_width} </p>

            </div>
              <img class="custom-board" alt="custom board" src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1633389075/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/customboard_bv4cbn.png"/>
            <Link to={`/customs/${custom.id}/edit`}>
              <button>EDIT</button>
            </Link>
            <button onClick={() => props.handleCustomDelete(custom.id)}>
              DELETE
            </button>
            <button>CART</button>
          </div>
        ))}
    </div>
  );
}
