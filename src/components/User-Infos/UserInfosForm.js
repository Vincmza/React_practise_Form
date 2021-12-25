import { Field, BirthDate, Email, Phone, GitHub } from "./Inputs";
import React from "react";

function UserInfosForm({userData, setUserData}) {
	const handleChange = (e)=>{
		setUserData(pv=>({...pv, [e.target.name]:e.target.value}))
	}
	console.log(userData)
	return (
		<div>
			<Field
				name="lastname"
				value={userData.lastname}
				onChange={handleChange}
			>
				Nom
			</Field>

			<Field
				name="firstname"
				value={userData.firstName}
				onChange={handleChange}
			>
				Prénom
			</Field>

			<BirthDate
				name="birthdate"
				value={userData.birthdate}
				onChange={handleChange}
			>
				Date de naissance
			</BirthDate>

			<Email
				name="email"
				value={userData.email}
				onChange={handleChange}
			>
				Email
			</Email>

			<Phone
				name="phone"
				value={userData.phone}
				onChange={handleChange}
			>
				Téléphone
			</Phone>

			<GitHub
				name="githubLink"
				value={userData.githubLink}
				onChange={handleChange}
			>
				Lien Github
			</GitHub>
		</div>
	);
}
export default UserInfosForm