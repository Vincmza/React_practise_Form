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
	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		formState: { errors, isSubmitting, isDirty },
	} = useForm({
		mode: "onTouched",
		defaultValues: {
			yourDetails: {
				nom: "",
				prénom: "",
				email: "",
				birthday: "",
				téléphone: "",
				lien: "",
			},
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
			10: "Octobre",
			11: "Novembre",
			12: "Décembre",
		};
		let newData = "";
		const bDay = data.yourDetails.birthday.split("-").reverse();
		for (const [key, value] of Object.entries(months)) {
			if (key === bDay[1]) {
				newData = bDay.join("-").replace(`-${key}-`, ` ${value} `);
			}
		}
		setValue("yourDetails.birthday", newData);
	};
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
		setDisplayUserInfos((previousValue) => !previousValue);
	};
	//DISPLAY SKILLS INFOS
	// const [displaySkills, setDisplaySkills] = useState(false);
	// const handleSkillsInfos = () => {
	// 	setDisplaySkills((previousValue)=>!previousValue);
	// };
	function name(msg) {
		return {
			required: `Votre ${msg} est indispensable`,
			maxLength: {
				value: 30,
				message: "Ce champ doit contenir au maximum 30 caractères ",
			},
			minLength: {
				value: 2,
				message: "Ce champ doit contenir au minimum 2 caractères",
			},
			pattern: {
				value: /[a-zA-Z-àáâãäåçèéêëìíîïðòóôõöùúûüýÿ'_ ]{1,}/,
				message: "Ce champ ne peut pas contenir de chiffres",
			},
		};
	}
	function email(msg) {
		return {
			required: `Votre ${msg} est indispensable`,
			maxLength: {
				value: 80,
				message: "Votre email doit contenir au maximum 80 caractères ",
			},
			minLength: {
				value: 10,
				message: "Votre email doit contenir au minimum 10 caractères",
			},
			pattern: {
				value: /[^@][a-z][.][a-z]/,
				message:
					"Votre email doit contenir un @ pour être validé et terminer convenablement (exemple : gmail.com, outlook.fr)",
			},
		};
	}
	function birthDay(msg) {
		let today = new Date();
		let dd = today.getDate().toString().padStart(2, "0");
		let mm = (today.getMonth() + 1).toString().padStart(2, "0"); //January is 0!
		let yyyy = today.getFullYear();
		today = yyyy + "-" + mm + "-" + dd;

		return {
			required: `Votre ${msg} est obligatoire`,
			max: {
				value: today,
				message: "La date sélectionnée ne peut pas dépasser la date d'aujourd'hui",
			},
			min: {
				value: "1945-01-01",
				message: "La date sélectionnée doit être égale ou supérieure au 1er Janvier 1945",
			},
		};
	}
	function phone() {
		return {
			pattern: {
				value: /^(0)([0-9]){9}$/,
				message: "Votre numéro de téléphone doit être composé de chiffres uniquement",
			},
		};
	}
	function link(){
		return {
			pattern : {
				value: /^(https)\/\/:/,
				message:"Ceci n'est pas une url"
			}
		}
	}
	console.log(errors);
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
					<label htmlFor={"nom"}>Nom</label>
					<input
						type="text"
						id={"nom"}
						name={"nom"}
						className="form-lastname"
						placeholder={"Nom"}
						{...register("yourDetails.nom", name("nom"))}
					/>
					{errors.nom && <span>{errors.nom.message}</span>}
					<label htmlFor={"prénom"}>Prénom</label>
					<input
						type="text"
						id={"prénom"}
						name={"prénom"}
						className="form-firstname"
						placeholder={"Prénom"}
						{...register("yourDetails.prénom", name("prénom"))}
					/>
					{errors.prénom && <span>{errors.prénom.message}</span>}
					<label htmlFor={"email"}>email</label>
					<input
						type="text"
						id={"email"}
						name={"email"}
						className="form-email"
						placeholder={"votre@email.com"}
						{...register("yourDetails.email", email("email"))}
					/>
					{errors.email && <span>{errors.email.message}</span>}

					<label htmlFor={"birthday"}>Anniversaire</label>
					<input
						type="date"
						id={"birthday"}
						name={"birthday"}
						className="form-birthdate"
						{...register("yourDetails.birthday", birthDay("date de naissance"))}
					/>
					{errors.birthday && <span>{errors.birthday.message}</span>}

					<label htmlFor={"téléphone"}>Téléphone</label>
					<input
						type="tel"
						id={"téléphone"}
						name={"téléphone"}
						className="form-phone"
						placeholder="0682357322 facultatif"
						{...register("yourDetails.téléphone", phone())}
					/>
					{errors.téléphone && <span>{errors.téléphone.message}</span>}

					<label htmlFor={name}>Lien</label>
					<input
						type="text"
						id={"lien"}
						name={"lien"}
						className="form-url"
						placeholder="https:// facultatif"
						{...register("yourDetails.lien", link())}
					/>
					{errors.yourDetails.lien && <span>{errors.yourDetails.lien.message}</span>}
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
				<input disabled={isSubmitting} type="submit" value="Valider" />
			</form>
		</div>
	);
}
export default App;
