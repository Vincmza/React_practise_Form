import React, { useState } from "react";
//components
import UserInfosForm from "./components/User-Infos/UserInfosForm";
import { RadioButton } from "./components/User-Infos/Inputs";
import "./App.css";


function App() {
	
	const [privateInfosChecked, setPrivateInfosChecked] = useState(false);
	const handleClick = () => {
		if (privateInfosChecked == false) {
			setPrivateInfosChecked(true);
		} else {
			setPrivateInfosChecked(false);
		}
	};
	// const [skillsInfosChecked, setSkillsInfosCHecked]=useState(false)
	return (
		<div className="App">
			<form className="form-container">
				<RadioButton value={privateInfosChecked} onClick={() => handleClick()} checked={privateInfosChecked}>
					Je renseigne mes informations personnelles
				</RadioButton>

				{privateInfosChecked == true ? (
					<>
						<UserInfosForm/>
					</>
				) : (
					<></>
				)}
			</form>
		</div>
	);
}
export default App;
