import React, { useState } from "react";
import { useForm } from "react-hook-form";
//components
// import { RadioButton } from "./components/User-Infos/Inputs";
// import UserInfosForm from "./components/User-Infos/UserInfosForm";
// import SkillsInfosForm from "./components/Skills-Infos/SkillsInfosForm";
// import DisplaySkills from "./components/DisplaySkills";
// import DisplayUser from "./components/DisplayUser";
// import Validation from "./components/Validation";

import "./App.css";

function App() {
	const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
  	const onSubmit = data => console.log("onSubmit :", data);
	console.log(errors);
	//STORE USER INFOS
	// const objectData = {"Nom": "", "Prénom": "", "Date de naissance": "", "email": "", "Téléphone":"", "Lien Github ou Gitlab":""}
	// const [userData, setUserData] = useState(objectData);
	//STORE FRONTEND SKILLS
	// const [frontEndSkills, setFrontEndSkills] = useState([])
	//STORE BACKEND SKILLS
	// const [backEndSkills, setBackEndSkills]= useState([])

	//DISPLAY USER INFOS INPUTS
	const [displayUserInfos, setDisplayUserInfos] = useState(false);
	const displayInputs = () => {
		setDisplayUserInfos(previousValue=>!previousValue);
	};
	//DISPLAY SKILLS INFOS
	// const [displaySkills, setDisplaySkills] = useState(false);
	// const handleSkillsInfos = () => {
	// 	setDisplaySkills((previousValue)=>!previousValue);
	// };
	function settings (msg, max, min){
		return {required:msg, maxLength:max, minLength:min}
	}
	return (
		<div className="App">
			<form className="form-container" onSubmit={handleSubmit(onSubmit)}>
				{/*BUTTON TO DISPLAY USER INFOS INPUTS*/}
				{/* <RadioButton
					onClick={displayInputs}
					checked={true}
				>
					Je renseigne mes informations personnelles
				</RadioButton> */}			
				<div>
					<label htmlFor={"Nom"}>Nom</label>
					<input
						type="text"
						id={"Nom"}
						name={"Nom"}
						className="form-lastname"
						pattern="[a-zA-Z-àáâãäåçèéêëìíîïðòóôõöùúûüýÿ' ]{1,}"
						placeholder={"Nom"}
						{...register("Nom",settings("Votre nom est obligatoire", 30, 2),{pattern:/[a-zA-Z-àáâãäåçèéêëìíîïðòóôõöùúûüýÿ' ]{1,}/})}
					/>
					<label htmlFor={"Prénom"}>Prénom</label>
					<input
						type="text"
						id={"Prénom"}
						name={"Prénom"}
						className="form-firstname"
						pattern="[a-zA-Z-àáâãäåçèéêëìíîïðòóôõöùúûüýÿ' ]{1,}"
						placeholder={"Prénom"}
						{...register("Prénom",settings("Vote prénom est obligatoire", 30, 2), {pattern:/[a-zA-Z-àáâãäåçèéêëìíîïðòóôõöùúûüýÿ' ]{1,}/})}
					/>
					{errors.Prénom && <span>{errors.Prénom.message}</span> }
					<label htmlFor={"email"}>email</label>
					<input
						type="email"
						id={"email"}
						name={"email"}
						className="form-email"
						placeholder={"votre@email.com"}
						{...register("email",settings("email obligatoire", 80, 10))}
					/>

					{/* <UserInfosForm userData={userData} setUserData={setUserData} /> */}
				</div>							
				{/* <DisplayUser userData={userData} setUserData={setUserData} objectData={objectData} /> */}
				{/*BUTTON TO DISPLAY SKILLS INFOS INPUTS*/}
				{/* <RadioButton
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
				<DisplaySkills frontEndSkills={frontEndSkills} backEndSkills={backEndSkills}/> */}
				{/* <Validation user={userData} front={frontEndSkills} back={backEndSkills}/> */}
				<input disabled={isSubmitting} type="submit" value="Valider"/>
			</form>
		</div>
	);
}
export default App;
