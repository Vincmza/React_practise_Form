import { Field, BirthDate, Email, Phone, GitHub } from "./Inputs";
import React from "react";

function UserInfosForm({setUserData }) {
	const handleChange = (e) => {
		setUserData((pv) => ({ ...pv, [e.target.name]: e.target.value }));
	};
	const handleBirth = (e) => {
		let str = e.target.value;
		const date = new Date(str);
		const options = { year: "numeric", month: "long", day: "numeric" };
		setUserData(pv=>({...pv, [e.target.name] : date.toLocaleDateString("fr-FR", options)}))
	};
	return (
		<div>
			<Field name="Nom" onChange={handleChange}>
				Nom
			</Field>

			<Field name="Prénom" onChange={handleChange}>
				Prénom
			</Field>

			<BirthDate name="Date de naissance" onChange={handleBirth}>
				Date de naissance
			</BirthDate>

			<Email name="email" onChange={handleChange}>
				Email
			</Email>

			<Phone name="Téléphone" onChange={handleChange}>
				Téléphone
			</Phone>

			<GitHub name="Lien Github ou Gitlab" onChange={handleChange}>
				Lien Github
			</GitHub>
		</div>
	);
}
export default UserInfosForm;
