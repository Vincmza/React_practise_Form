import React, { useState } from "react";
//components
import SkillsInfosForm from "./components/Skills/SkillsInfosForm";
import DisplaySkills from "./components/Skills/DisplaySkills";
import UserForm from "./components/Form/UserForm"
//Style
import "./style/App.css";

function App() {
	// STORE FRONTEND SKILLS
	const [frontEndSkills, setFrontEndSkills] = useState([]);
	// STORE BACKEND SKILLS
	const [backEndSkills, setBackEndSkills] = useState([]);
	return (
		<div className="App">
			<SkillsInfosForm
				frontEndSkills={frontEndSkills}
				setFrontEndSkills={setFrontEndSkills}
				backEndSkills={backEndSkills}
				setBackEndSkills={setBackEndSkills}
			/>
			<DisplaySkills frontEndSkills={frontEndSkills} backEndSkills={backEndSkills} />
			<UserForm/>
		</div>
	);
}
export default App;
