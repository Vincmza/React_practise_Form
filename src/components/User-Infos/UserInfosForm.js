import { Field, BirthDate, Email, Phone, GitHub } from "./Inputs";
import React from "react";

function UserInfosForm({userData, setUserData}) {
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
			<Field name="Nom" onChange={handleChange} value={userData.length === 0 ? "" : userData["Nom"]} required>
				Nom
			</Field>

			<Field name="Prénom" onChange={handleChange} value={userData.length === 0 ? "" : userData["Prénom"]} required>
				Prénom
			</Field>

			<BirthDate name="Date de naissance" onChange={handleBirth} value={userData.length === 0 ? "" : userData["Date de naissance"]} required>
				Date de naissance
			</BirthDate>

			<Email name="email" onChange={handleChange} value={userData.length === 0 ? "" : userData["email"]} required>
				Email
			</Email>

			<Phone name="Téléphone" onChange={handleChange} value={userData.length === 0 ? "" : userData["Téléphone"]} required>
				Téléphone
			</Phone>

			<GitHub name="Lien Github ou Gitlab" onChange={handleChange} value={userData.length === 0 ? "" : userData["Lien Github ou Gitlab"]}>
				Lien Github
			</GitHub>
		</div>
	);
}
export default UserInfosForm;
