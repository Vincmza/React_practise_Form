import React, { useState } from "react";
//components
import UserInfosForm from "./components/User-Infos/UserInfosForm";
import SkillsInfosForm from "./components/Skills-Infos/SkillsInfosForm";
import DisplaySkills from "./components/DisplaySkills";
import DisplayUser from "./components/DisplayUser";
import { RadioButton } from "./components/User-Infos/Inputs";
import "./App.css";


function App() {
	//STORE USER INFOS
	const [userData, setUserData] = useState([]);
	//STORE FRONTEND SKILLS
	const [frontEndSkills, setFrontEndSkills] = useState([])
	//STORE BACKEND SKILLS
	const [backEndSkills, setBackEndSkills]= useState([])

	//DISPLAY USER INFOS INPUTS
	const [displayUserInfos, setDisplayUserInfos] = useState(false);
	const handleUserInfos = () => {
		setDisplayUserInfos((previousValue)=>!previousValue);	
	};
	//DISPLAY SKILLS INFOS
	const [displaySkills, setDisplaySkills] = useState(false);
	const handleSkillsInfos = () => {
		setDisplaySkills((previousValue)=>!previousValue);
	};
	return (
		<div className="App">
			<form className="form-container">
				{/*BUTTON TO DISPLAY USER INFOS INPUTS*/}
				<RadioButton
					onClick={() => handleUserInfos()}
					checked={displayUserInfos}
				>
					Je renseigne mes informations personnelles
				</RadioButton>

				{displayUserInfos && (
					<>
						<UserInfosForm userData={userData} setUserData={setUserData} />
						<DisplayUser userData={userData} setUserData={setUserData} />
					</>
				
				)}
				{/*BUTTON TO DISPLAY SKILLS INFOS INPUTS*/}
				<RadioButton
					onClick={() => handleSkillsInfos()}
					checked={displaySkills}
				>
					Je renseigne mes compétences
				</RadioButton>
				{displaySkills && (
					<>
						<SkillsInfosForm 
							frontEndSkills={frontEndSkills} 
							setFrontEndSkills={setFrontEndSkills}
							backEndSkills={backEndSkills}
							setBackEndSkills={setBackEndSkills}
						/>
					</>
				)}
				<DisplaySkills frontEndSkills={frontEndSkills} backEndSkills={backEndSkills}/>				
			</form>
		</div>
	);
}
export default App;
