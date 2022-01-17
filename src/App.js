import React from "react";
//components
import SkillsInfosForm from "./components/Skills/SkillsInfosForm";
import DisplaySkills from "./components/Skills/DisplaySkills";
import UserForm from "./components/Form/UserForm"


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
