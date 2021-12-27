import { Field, BirthDate, Email, Phone, GitHub } from "./Inputs";
import React from "react";

function UserInfosForm({userData, setUserData}) {
	const handleChange = (e)=>{
		setUserData(pv=>({...pv, [e.target.name] : e.target.value}))
	}
	return (
		<div>
			<Field
				name="Nom"
				onChange={handleChange}
			>
				Nom
			</Field>

			<Field
				name="Prénom"
				onChange={handleChange}
			>
				Prénom
			</Field>

			<BirthDate
				name="Date de naissance"
				onChange={handleChange}
			>
				Date de naissance
			</BirthDate>

			<Email
				name="email"
				onChange={handleChange}
			>
				Email
			</Email>

			<Phone
				name="Téléphone"
				onChange={handleChange}
			>
				Téléphone
			</Phone>

			<GitHub
				name="Lien Github ou Gitlab"
				onChange={handleChange}
			>
				Lien Github
			</GitHub>
		</div>
	);
}
export default UserInfosForm