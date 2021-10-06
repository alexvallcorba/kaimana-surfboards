// import Layout from "../../layouts/Layout1";
import { Link } from "react-router-dom";

export default function Customs(props) {
  return (
    <div>
      {/* <Layout user={props.user}> */}
        <h3>CUSTOMS</h3>
        {props.customs.map((custom) => (
          <div key={custom.id}>
            <Link to={`/customs/${custom.id}`}>
              <p>{custom.name}</p>
            </Link>
            <Link to={`/customs/${custom.id}/edit`}>
              <button>EDIT</button>
            </Link>
            <button onClick={() => props.handleCustomDelete(custom.id)}>
              DELETE
            </button>
            <button>CART</button>
          </div>
        ))}
      {/* </Layout> */}
    </div>
  );
}
