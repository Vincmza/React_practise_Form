import { Field, BirthDate, Email, Phone, GitHub } from "./Inputs";
import React from "react";

function UserInfosForm({userData, setUserData}) {
	const handleChange = (e) => {
		setUserData((pv) => ({ ...pv, [e.target.name]: e.target.value }));
	};
	const handleBirth = (e) => {
		const months = {"01" : "Janvier", "02" : "Février", "03" : "Mars", "04" :"Avril", "05":"Mai", "06":"Juin", "07":"Juillet", "08":"Août", "09":"Septembre", "10":"Octobre", "11":"Novembre", "12":"Décembre"}
		let month = ""
		let str = e.target.value.split("-").reverse()
		for (const [key, value] of Object.entries(months)) {
			if(key === str[1]){
				month = str.join("-").replace(`-${key}-`, ` ${value} `)
			}
		}
		setUserData(pv=>({...pv, [e.target.name]:month}))		
	};
	return (
		<div>
			<Field name="Nom" onChange={handleChange} value={userData.length === 0 ? "" : userData["Nom"]} required>
				Nom
			</Field>

			<Field name="Prénom" onChange={handleChange} value={userData.length === 0 ? "" : userData["Prénom"]} required>
				Prénom
			</Field>

			<BirthDate name="Date de naissance" onChange={handleBirth} value={userData.length === 0 ? "" : null }required>
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
