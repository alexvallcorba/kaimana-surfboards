import {useState} from 'react'

export default function CreateCustom(props) {
  const [formData, setFormData] = useState({
    name: ''
  })

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

  return (
    <div>
    <form onSubmit={(e)=> {
      e.preventDefault()
      props.handleCreateCustom(formData);
    }}>
      <h3>BUILD YOUR CUSTOM</h3>
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
      <br/>
      <button>Submit</button>
    </form>
    </div>
  );
}