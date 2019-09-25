import React from "react";

import {FormikLoginForm1, FormikLoginForm2} from "./components/Form";
import DashBoard2 from "./components/DashBoard2";


function App() {
  return (
    <div className="App">
      <DashBoard2 />
      <FormikLoginForm1 />
      <FormikLoginForm2 />
    </div>
  );
}

export default App;
