import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'


export default function EditCustom(props) {
  const [formData, setFormData] = useState({
    name: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const singleCustom = props.customs.find(
        (custom) => custom.id === Number(id)
      );
      setFormData({
        name: singleCustom.name,
        rocker: singleCustom.rocker,
        height: singleCustom.height,
        volume: singleCustom.volume,
        tail_width: singleCustom.tail_width
      });
      // setFormData(singleCustom);
    };
    if (props.customs.length) {
      prefillFormData();
    }
  }, [props.customs, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* <Layout userr={props.user}> */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleEditCustom(formData);
        }}
      >
        <h3>EDIT YOUR CUSTOM</h3>
        <label>NAME</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>ROCKER</label>

        <input
          type="text"
          name="rocker"
          value={formData.rocker}
          onChange={handleChange}
        />
        <label>HEIGHT</label>

        <input
          type="text"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />

        <label>VOLUME</label>

        <input
          type="text"
          name="volume"
          value={formData.volume}
          onChange={handleChange}
        />

        <label>TAIL WIDTH</label>
        <input
          type='text'
          name='tail_width'
          value={formData.tail_width}
          onChange={handleChange}
        />
        <br />
        <Link to="/customs">
        <button>EDIT</button>
        </Link>
      </form>
      {/* </Layout> */}
    </div>
  );
}
