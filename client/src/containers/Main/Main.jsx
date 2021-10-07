


import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getAllCustoms, postCustom, deleteCustom, putCustom } from '../../services/customs';
import { getAllSurfboards } from '../../services/surfboards';
import Home from '../../screens/home/Home';
import Surfboards from '../../screens/surfboards/Surfboards';
import Customs from '../../screens/customs/Customs';
import CreateCustom from '../../screens/create/CreateCustom';
import EditCustom from '../../screens/edit/EditCustom';
import CustomDetail from '../../screens/customDetail/CustomDetail';
import SurfboardDetail from '../../screens/surfboardDetail/SurfboardDetail';
import About from '../../screens/about/About'


export default function MainContainer() {
  const [customs, setCustoms] = useState([]);
  const [surfboards, setSurfboards] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchCustoms = async () => {
      const customList = await getAllCustoms();
      setCustoms(customList);
    };
    fetchCustoms();
  }, []);

  useEffect(() => {
    const fetchSurfboards = async () => {
      const surfboardList = await getAllSurfboards();
      setSurfboards(surfboardList);
    };
    fetchSurfboards();
  }, []);

  

  const handleCreateCustom = async (customData) => {
    const newCustom = await postCustom(customData);
    setCustoms((prevState) => [...prevState, newCustom]);
    history.push('/customs');
  };

  const handleCustomDelete = async (id) => {
    await deleteCustom(id);
    setCustoms((prevState) => prevState.filter((customItem) => customItem.id !== id));
  };

  const handleEditCustom = async (id, customData) => {
    const updatedCustom = await putCustom(id, customData);
    setCustoms((prevState) =>
      prevState.map((custom) => {
        return custom.id === Number(id) ? updatedCustom : custom;
      })
    );
    history.push('/customs');
  };

  return (
    <Switch>
      {/* <Layout> */}
      <Route path='/surfboards/:id'>
        <SurfboardDetail surfboards={surfboards} />
      </Route>

      <Route path='/surfboards'>
        <Surfboards surfboards={surfboards} />
      </Route>

      <Route path='/about'>
        <About  />
      </Route>

      <Route path='/build-custom'>
        <CreateCustom handleCreateCustom={handleCreateCustom} />
      </Route>

      <Route path='/customs/:id/edit'>
        <EditCustom customs={customs} handleEditCustom={handleEditCustom} />
      </Route>
      
      <Route path='/customs/:id'>
        <CustomDetail customs={customs} />
      </Route>

      <Route path='/customs'>
        <Customs customs={customs} handleCustomDelete={handleCustomDelete} />
      </Route>
      
      <Route path="/">
          <Home  />
      </Route>
      
      {/* </Layout> */}
    </Switch>
  );
}