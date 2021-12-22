import React, { useState } from "react";
//components
import UserInfosForm from "./components/User-Infos/UserInfosForm";
import SkillsInfosForm from "./components/Skills-Infos/SkillsInfosForm";
import { RadioButton } from "./components/User-Infos/Inputs";
import "./App.css";

function App() {
	//STORE USER INFOS
	const [userData, setUserData] = useState({});
	console.log(userData)
	//DISPLAY USER INFOS INPUTS
	const [displayUserInfos, setDisplayUserInfos] = useState(false);
	const handleUserInfos = () => {
		if (displayUserInfos == false) {
			setDisplayUserInfos(true);
		} else {
			setDisplayUserInfos(false);
		}
	};
	//DISPLAY SKILLS INFOS
	const [displaySkills, setDisplaySkills] = useState(false);
	const handleSkillsInfos = () => {
		if (displaySkills == false) {
			setDisplaySkills(true);
		} else {
			setDisplaySkills(false);
		}
	};
	return (
		<div className="App">
			<form className="form-container">
				<RadioButton
					onClick={() => handleUserInfos()}
					checked={displayUserInfos}
				>
					Je renseigne mes informations personnelles
				</RadioButton>

				{displayUserInfos == true ? (
					<>
						<UserInfosForm userData={userData} setUserData={setUserData} />
					</>
				) : (
					<></>
				)}
				<RadioButton
					onClick={() => handleSkillsInfos()}
					checked={displaySkills}
				>
					Je renseigne mes compétences
				</RadioButton>
				{displaySkills == true ? (
					<>
						<SkillsInfosForm />
					</>
				) : (
					<></>
				)}
			</form>
		</div>
	);
}
export default App;
