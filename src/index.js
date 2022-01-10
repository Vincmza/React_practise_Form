import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
//components
import Confirmation from "./pages/Confirmation";
import Presentation from "./pages/Presentation";
import Error from "./components/Error/Error";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//context
import {FrontSkillsProvider, BackSkillsProvider, UserContextProvider} from "./context/index"

ReactDOM.render(
	<React.StrictMode>
		<Router>
      <FrontSkillsProvider>
      <BackSkillsProvider>
      <UserContextProvider>
        <Routes>      
          <Route exact path="/" exact element={<Presentation />}/>
          <Route exact path="/form" exact element={<App />}/>
          <Route exact path="/confirm" exact element={<Confirmation/>}/>
          <Route path="*" exact element={<Error/>}/>      
        </Routes>
      </UserContextProvider>
      </BackSkillsProvider>  
      </FrontSkillsProvider> 
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
