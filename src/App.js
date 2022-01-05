import React, { useState, useContext } from "react";
//components
import SkillsInfosForm from "./components/Skills/SkillsInfosForm";
import DisplaySkills from "./components/Skills/DisplaySkills";
import UserForm from "./components/Form/UserForm"
//Style
import "./style/App.css";




function App() {
	return (
		<div className="App">
			<SkillsInfosForm/>
			<DisplaySkills/>
			<UserForm/>
		</div>
	);
}
export default App;
