import React from "react";
import { Route } from "react-router-dom";
import Main from "./Main";
import Review from "./Review";


function App() {
  
  return (
    <div className="App">
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/review/:week_day" exact>
        <Review />
      </Route>
    </div>
  );
}

export default App;