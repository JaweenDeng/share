/*
 * @Descripttion: 
 * @version: 
 * @Author: JW
 * @Date: 2021-06-01 21:43:44
 */
import React, {Suspense} from 'react';
import './App.css';
import RouteConfig from "./routes/Router.config";
import RouteView from "./routes/RouteView";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <RouteView 
          children={RouteConfig} />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
