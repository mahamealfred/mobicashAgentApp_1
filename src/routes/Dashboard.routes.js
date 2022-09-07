import React from "react";
import { useRouteMatch, Route,Switch } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Home from "../pages/home/Home";
import PrivateRoute from "./PrivateRoutes"
import RraForm from "../pages/servicespages/rra/RraForm";
import CbhiIdentificationForm from "../pages/servicespages/cbhi/CbhiIdentificationForm";
function App() {
  const {path}=useRouteMatch()
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