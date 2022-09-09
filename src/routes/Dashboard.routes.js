import React from "react";
import { useRouteMatch, Route,Switch } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Home from "../pages/home/Home";
import PrivateRoute from "./PrivateRoutes"
import RraForm from "../pages/servicespages/rra/RraForm";
import CbhiIdentificationForm from "../pages/servicespages/cbhi/CbhiIdentificationForm";
import {useEffect} from "react";
import jwt from "jsonwebtoken";
import { useHistory } from 'react-router-dom';
function App() {
  const {path}=useRouteMatch();
  const decode=(token) => {
    const JWT_SECRET="tokensecret";
    const payload = jwt.verify(token, JWT_SECRET);
     return payload;
  }
  // const handleCloseWindows=()=>{
  // localStorage.removeItem('mobicashAuth');
  // }
  const history= useHistory();
  useEffect(() => {
  //  window.addEventListener('beforeunload', handleCloseWindows);
    const token =sessionStorage.getItem('mobicash-auth');
    if (token) {
    const {exp}=decode(token);
    if(Date.now()>=exp*1000){
      localStorage.removeItem("mobicashAuth")
      sessionStorage.removeItem("mobicash-auth")
     return history.push('/', { push: true })
    }
    else{
      return null
    }
  }
  return history.push('/', { push: true })
  }, [history]);
    return (
    
      <Switch >
      <Dashboard>
          <Route
            component={({ match }) => (
              <>
                <PrivateRoute exact path={path} component={Home} />
              </>
            )}
          />
           <Route
          component={({ match }) => (
            <>
              <PrivateRoute
                exact
                path={`${path}/rra/service`}
                component={RraForm}
              />
            </>
          )}
        />
         <Route
          component={({ match }) => (
            <>
              <PrivateRoute
                exact
                path={`${path}/cbhi/service`}
                component={CbhiIdentificationForm}
              />
            </>
          )}
        />
        </Dashboard>
      </Switch>
       
     
    );
  }
  
  export default App;