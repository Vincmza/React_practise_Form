import React from "react";
import { Link } from "react-router-dom";
//components
import SkillsInfosForm from "./components/Skills/SkillsInfosForm";
import DisplaySkills from "./components/Skills/DisplaySkills";
import UserForm from "./components/Form/UserForm"


function App() {
	return (
		<div className="App">
			<Link to="/"><input type="button" value="Retour"/></Link>
			<SkillsInfosForm/>
			<DisplaySkills/>
			<UserForm/>
		</div>
	);
}
export default App;
