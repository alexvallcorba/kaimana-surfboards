
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';

import Layout from './layouts/Layout1';
import SignIn from './screens/signin/SignIn'
import SignUp from './screens/signup/SignUp';
import Main from './containers/main/Main';

import {
  signInUser,
  signUpUser,
  verifyUser,
  removeToken,
} from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleSignIn = async (loginData) => {
    const userData = await signInUser(loginData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleSignUp = async (registerData) => {
    const userData = await signUpUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  };

  return (
    <div className='App'>
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path='/sign-in'>
            <SignIn handleSignIn={handleSignIn} />
          </Route>
          <Route path='/sign-up'>
            <SignUp handleSignUp={handleSignUp} />
          </Route>
          <Route path='/'>
            <Main />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

