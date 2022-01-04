import React, { useState } from "react";
import { useForm } from "react-hook-form";
//components
import { identity, email, birthDay, phone, link } from "./Register/RegisterMethod";
import SkillsInfosForm from "./components/Skills/SkillsInfosForm";
import DisplaySkills from "./components/Skills/DisplaySkills";
//Style
import { Form, Input, InputContainer, Validate } from "./Style/AppStyle";
import "./Style/App.css";

function App() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: "onBlur",
		userInfos: {
			nom: "",
			prenom: "",
			email: "",
			birthday: "",
			telephone: "",
			lien: "",
		},
	});
	const onSubmit = (data) => {
		console.log("onSubmit :", data);
		const months = {
			"01": "Janvier",
			"02": "Février",
			"03": "Mars",
			"04": "Avril",
			"05": "Mai",
			"06": "Juin",
			"07": "Juillet",
			"08": "Août",
			"09": "Septembre",
			"10": "Octobre",
			"11": "Novembre",
			"12": "Décembre",
		};
		//GET BIRTHDAY IN DD/MM/YYYY FORMAT INCLUDING ALL LETTERS MONTH
		let newData = "";
		const bDay = data.birthday.split("-").reverse();
		for (const [key, value] of Object.entries(months)) {
			if (key === bDay[1]) {
				newData = bDay.join("-").replace(`-${key}-`, ` ${value} `);
				data.birthday = newData;
			}
		}
	};
	// STORE FRONTEND SKILLS
	const [frontEndSkills, setFrontEndSkills] = useState([]);
	// STORE BACKEND SKILLS
	const [backEndSkills, setBackEndSkills] = useState([]);
	return (
		<div className="App">
			<SkillsInfosForm
				frontEndSkills={frontEndSkills}
				setFrontEndSkills={setFrontEndSkills}
				backEndSkills={backEndSkills}
				setBackEndSkills={setBackEndSkills}
			/>
			<DisplaySkills frontEndSkills={frontEndSkills} backEndSkills={backEndSkills} />
			<Form className="form-container" onSubmit={handleSubmit(onSubmit)}>
				<InputContainer>
					<Input>
						<label htmlFor={"nom"}>Nom</label>
						<input
							type="text"
							id={"nom"}
							name={"nom"}
							className="form-lastname"
							placeholder={"Nom"}
							{...register("nom", identity("nom"))}
						/>
						{errors.nom && <span>{errors.nom.message}</span>}
					</Input>
					<Input>
						<label htmlFor={"prenom"}>Prénom</label>
						<input
							type="text"
							id={"prenom"}
							name={"prenom"}
							className="form-firstname"
							placeholder={"Prénom"}
							{...register("prenom", identity("prenom"))}
						/>
						{errors.prenom && <span>{errors.prenom.message}</span>}
					</Input>

					<Input>
						<label htmlFor={"email"}>email</label>
						<input
							type="text"
							id={"email"}
							name={"email"}
							className="form-email"
							placeholder={"votre@email.com"}
							{...register("email", email("email"))}
						/>
						{errors.email && <span>{errors.email.message}</span>}
					</Input>

					<Input>
						<label htmlFor={"birthday"}>Anniversaire</label>
						<input
							type="date"
							id={"birthday"}
							name={"birthday"}
							className="form-birthdate"
							{...register("birthday", birthDay("date de naissance"))}
						/>
						{errors.birthday && <span>{errors.birthday.message}</span>}
					</Input>

					<Input>
						<label htmlFor={"telephone"}>Téléphone</label>
						<input
							type="text"
							id={"telephone"}
							name={"telephone"}
							className="form-phone"
							placeholder="06 ** ** ** ** facultatif"
							{...register("telephone", phone())}
						/>
						{errors.telephone && <span>{errors.telephone.message}</span>}
					</Input>

					<Input>
						<label htmlFor={"lien"}>Lien</label>
						<input
							type="tel"
							id={"lien"}
							name={"lien"}
							className="form-url"
							placeholder="https:// facultatif"
							{...register("lien", link())}
						/>
						{errors.lien && <span>{errors.lien.message}</span>}
					</Input>
				</InputContainer>
				{isValid && (
					<span style={{ color: "green" }}>Votre formulaire semble correcte</span>
				)}
				<Validate type="submit" value="Valider" />
			</Form>
		</div>
	);
}
export default App;
