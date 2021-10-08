import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import './EditCustom.css'


export default function EditCustom(props) {
  const [formData, setFormData] = useState({
    name: '',
    rocker: '',
    height: '',
    volume: '',
    tail_width:''
  });
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const singleCustom = props.customs.find(custom=> custom.id === Number(id))
      setFormData({
        name: singleCustom.name,
        rocker: singleCustom.rocker,
        height: singleCustom.height,
        volume: singleCustom.volume,
        tail_width: singleCustom.tail_width
      });
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
    <div className="edit-page">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleEditCustom(id, formData);
        }}
      >
        

      <div className="edit-container">

        <h3 className="edit-title" >EDIT YOUR CUSTOM</h3>
        <label>NAME</label>
          <input
          className="input3"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>ROCKER</label>

        <input
          className="input3"
          type="text"
          name="rocker"
          value={formData.rocker}
          onChange={handleChange}
        />
        <label>HEIGHT</label>

        <input
          className="input3"
          type="text"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />

        <label>VOLUME</label>

        <input
          className="input3"
          type="text"
          name="volume"
          value={formData.volume}
          onChange={handleChange}
        />

        <label>TAIL WIDTH</label>
        <input
          className="input3"
          type='text'
          name='tail_width'
          value={formData.tail_width}
          onChange={handleChange}
        />
        <br />
            <button className="edit-button" type="submit">
              EDIT
            </button>
        </div>
      </form>
    </div>
  );
}
