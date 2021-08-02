import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About"
import Navigate from "./components/Navigate"
import Detail from "./routes/Detail";


function App(){
  return (
    <HashRouter>
      <Navigate />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" exatc={true} component={About} />
      <Route path="/movie/:id" exact={true} component={Detail} />
    </HashRouter>
  )
}


export default App;