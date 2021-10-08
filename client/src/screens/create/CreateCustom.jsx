import { useState } from 'react'
import './CreateCustom.css'


export default function CreateCustom(props) {
  const [formData, setFormData] = useState({
    name: '',
    rocker: '',
    height: '',
    volume: '',
    tail_width:''
  })

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

  return (
    <div className="create-page">
    <form onSubmit={(e)=> {
      e.preventDefault()
      props.handleCreateCustom(formData);
      }}
    >

      <div className="create-container">
      <h3 className="create-title">BUILD YOUR CUSTOM</h3>
      <label>NAME</label>
          <input
          className="input2"
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
        />
      <label>ROCKER</label>
          <input
          className="input2"
            
          type='text'
          name='rocker'
          value={formData.rocker}
          onChange={handleChange}
          required
        />

      <label>HEIGHT</label>
          <input
          className="input2"
            
          type='text'
          name='height'
          value={formData.height}
          onChange={handleChange}
          required
        />
      
      <label>VOLUME</label>
          <input
          className="input2"
            
          type='text'
          name='volume'
          value={formData.volume}
          onChange={handleChange}
          required
        />
        
      <label>TAIL WIDTH</label>
          <input
          className="input2"
            
          type='text'
          name='tail_width'
          value={formData.tail_width}
          onChange={handleChange}
          required
        />
        <br />
          <button className="create-button" type="submit">
            CREATE
          </button>
          </div>
      </form>
      </div>
    

  );
}