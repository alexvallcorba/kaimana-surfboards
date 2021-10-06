import { useState, useEffect } from 'react';
// import Layout from "../../layouts/Layout1";
import {useParams} from 'react-router-dom';

export default function EditCustom(props) {
  const [formData, setFormData] = useState({
    name: '',
  });
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const singleCustom = props.customs.find(custom => custom.id === Number(id))
      setFormData({
        name: singleCustom.name,
      });
    }
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
      <form onSubmit={(e) => {
        e.preventDefault()
        props.handleEditCustom(formData);
      }}>
        <h3>EDIT YOUR CUSTOM</h3>
        <label>NAME</label>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        <label>ROCKER</label>
        
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        <label>HEIGHT</label>
        
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      
      
        <label>VOLUME</label>
        
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        <label>TAIL WIDTH</label>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
      {/* </Layout> */}
    </div>
  );
}





  