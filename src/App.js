import React, { useState } from "react";
import "./App.css";

//LASTNAME AND FIRSTNAME INPUTS
function Field({ name, value, onChange, children }) {
	return (
		<div>
			<label htmlFor={name}>{children}</label>
			<input
				type="text"
				value={value}
				onChange={onChange}
				id={name}
				name={name}
				className="form-control"
				pattern="[a-zA-Z-àáâãäåçèéêëìíîïðòóôõöùúûüýÿ]{1,}"
				required
			/>
		</div>
	);
}
//BIRTHDATE INPUT (CALENDAR TYPE)
function BirthDate({ name, value, onChange, children }) {
	return (
		<div>
			<label htmlFor={name}>{children}</label>
			<input
				type="date"
				value={value}
				onChange={onChange}
				id={name}
				name={name}
				className="form-birthdate"
				required
			/>
		</div>
	);
}
//EMAIL INPUT
function Email({ name, value, onChange, children }) {
	return (
		<div>
			<label htmlFor={name}>{children}</label>
			<input
				type="email"
				value={value}
				onChange={onChange}
				id={name}
				name={name}
				className="form-email"
				required
			/>
		</div>
	);
}
//PHONE INPUT (TYPE TEL)
function Phone({ name, value, onChange, children }) {
	return (
		<div>
			<label htmlFor={name}>{children}</label>
			<input
				type="tel"
				value={value}
				onChange={onChange}
				id={name}
				name={name}
				className="form-phone"
				pattern="[0-9]{10}"
			/>
		</div>
	);
}
//URL INPUT TO ALLOW USER TO DROP GITHUB URL
function GitHub({ name, value, onChange, children }) {
	return (
		<div>
			<label htmlFor={name}>{children}</label>
			<input
				type="url"
				value={value}
				onChange={onChange}
				id={name}
				name={name}
				className="form-url"
				pattern="https://.*"
			/>
		</div>
	);
}
//RADIO INPUT TO DISPLAY USER'S IDENTITY INPUTS RELATED
function RadioButton({ name, value, children, onClick, checked }) {
	return (
		<div>
			<input
				type="radio"
				value={value}
				id={name}
				name={name}
				onClick={onClick}
				checked={checked}
				className="radio-button"
			/>
			<label htmlFor={name}>{children}</label>
		</div>
	);
}

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
	const [userData, setUserData] = useState({});
	
	return (
		<div className="App">
			<form className="form-container">
				<RadioButton value={privateInfosChecked} onClick={() => handleClick()} checked={privateInfosChecked}>
					Je renseigne mes informations personnelles
				</RadioButton>

				{privateInfosChecked == true ? (
					<>
						<Field
							name="lastname"
							value={userData.lastName}
							onChange={(e) => setUserData({ lastName: e.target.value })}
						>
							Nom
						</Field>

						<Field
							name="firstname"
							value={userData.firstName}
							onChange={(e) => setUserData({ firstName: e.target.value })}
						>
							Prénom
						</Field>

						<BirthDate
							name="birthdate"
							value={userData.birthDate}
							onChange={(e) => setUserData({ birthDate: e.target.value })}
						>
							Date de naissance
						</BirthDate>

						<Email
							name="email"
							value={userData.email}
							onChange={(e) => setUserData({ email: e.target.value })}
						>
							Email
						</Email>

						<Phone
							name="phone"
							value={userData.phone}
							onChange={(e) => setUserData({ phone: e.target.value })}
						>
							Téléphone
						</Phone>

						<GitHub
							name="github-link"
							value={userData.gitHubLink}
							onChange={(e) => setUserData({ gitHubLink: e.target.value })}
						>
							Lien Github
						</GitHub>
					</>
				) : (
					<></>
				)}
			</form>
		</div>
	);
}
export default App;
