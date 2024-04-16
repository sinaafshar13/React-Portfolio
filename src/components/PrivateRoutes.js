import React from "react";
import {Navigate} from "react-router-dom" 
import { isLogin } from "../utils";

const PrivateRoutes = ({children}) => {
  
  return <>{isLogin() ? children : <Navigate to="/loginPage" />}</>;
};

export default PrivateRoutes;
