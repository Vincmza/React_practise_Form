import { Field, BirthDate, Email, Phone, GitHub } from "./Inputs";
import React, {useState} from "react";

function UserInfosForm({userData, setUserData}) {
	return (
		<div>
			<Field
				name="lastname"
				value={userData.lastName}
				onChange={(e) => setUserData(previousValue=>({...previousValue, lastName: e.target.value }))}
			>
				Nom
			</Field>

			<Field
				name="firstname"
				value={userData.firstName}
				onChange={(e) => setUserData(previousValue=>({...previousValue, firstName: e.target.value }))}
			>
				Prénom
			</Field>

			<BirthDate
				name="birthdate"
				value={userData.birthDate}
				onChange={(e) => setUserData(previousValue=>({...previousValue, birthDate: e.target.value }))}
			>
				Date de naissance
			</BirthDate>

			<Email
				name="email"
				value={userData.email}
				onChange={(e) => setUserData(previousValue=>({...previousValue, email: e.target.value }))}
			>
				Email
			</Email>

			<Phone
				name="phone"
				value={userData.phone}
				onChange={(e) => setUserData(previousValue=>({...previousValue, phone: e.target.value }))}
			>
				Téléphone
			</Phone>

			<GitHub
				name="github-link"
				value={userData.gitHubLink}
				onChange={(e) => setUserData(previousValue=>({...previousValue, gitHubLink: e.target.value }))}
			>
				Lien Github
			</GitHub>
		</div>
	);
}
export default UserInfosForm