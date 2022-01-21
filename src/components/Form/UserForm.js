import React, {useContext,useState}from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import colors from "../../style/colors";
//style
import { Form, Input, InputContainer, Validate, Wrapper, Label, Input2, Error } from "../../style/UserFormStyle";
//functions that return properties of register method
import { identity, email, birthDay, phone, link } from "../../register/RegisterMethod";
//context
import {UserContext, FrontSkillsContext, BackSkillsContext} from "../../context/index"


const UserForm = () => {
	let navigate = useNavigate()
	const {frontEndSkills}=useContext(FrontSkillsContext)
	const {backEndSkills}=useContext(BackSkillsContext)
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: "onBlur",
		defaultValues: {
			nom: "",
			prenom: "",
			email: "",
			birthday: "",
			telephone: "",
			lien: "",
		},
	});
	const {userData, setUserData}=useContext(UserContext)
	const onSubmit = (data) => {
		console.log("Je suis un choufleur")
		// console.log("onSubmit :", data);
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
		setUserData(data)
		navigate("/confirm")
	};	
	return (
		<Wrapper>
			<Form className="form-container" onSubmit={handleSubmit(onSubmit)}>
				<InputContainer>
					<Input>
						<Label htmlFor={"nom"}>Nom</Label>
						<Input2
							type="text"
							id={"nom"}
							name={"nom"}
							className="form-lastname"
							placeholder={"Nom"}
							{...register("nom", identity("nom"))}
						/>
						{errors.nom && <Error>{errors.nom.message}</Error>}
					</Input>
					<Input>
						<Label htmlFor={"prenom"}>Prénom</Label>
						<Input2
							type="text"
							id={"prenom"}
							name={"prenom"}
							className="form-firstname"
							placeholder={"Prénom"}
							{...register("prenom", identity("prenom"))}
						/>
						{errors.prenom && <Error>{errors.prenom.message}</Error>}
					</Input>

					<Input>
						<Label htmlFor={"email"}>email</Label>
						<Input2
							type="text"
							id={"email"}
							name={"email"}
							className="form-email"
							placeholder={"votre@email.com"}
							{...register("email", email("email"))}
						/>
						{errors.email && <Error>{errors.email.message}</Error>}
					</Input>

					<Input>
						<Label htmlFor={"birthday"}>Anniversaire</Label>
						<Input2
							type="date"
							id={"birthday"}
							name={"birthday"}
							className="form-birthdate"
							{...register("birthday", birthDay("date de naissance"))}
						/>
						{errors.birthday && <Error>{errors.birthday.message}</Error>}
					</Input>

					<Input>
						<Label htmlFor={"telephone"}>Téléphone</Label>
						<Input2
							type="text"
							id={"telephone"}
							name={"telephone"}
							className="form-phone"
							placeholder="06 ** ** ** ** facultatif"
							{...register("telephone", phone())}
						/>
						{errors.telephone && <Error>{errors.telephone.message}</Error>}
					</Input>

					<Input>
						<Label htmlFor={"lien"}>Lien</Label>
						<Input2
							type="tel"
							id={"lien"}
							name={"lien"}
							className="form-url"
							placeholder="https:// facultatif"
							{...register("lien", link())}
						/>
						{errors.lien && <Error>{errors.lien.message}</Error>}
					</Input>
				</InputContainer>
				{isValid && (frontEndSkills.length > 0 || backEndSkills.length > 0)? 
				(
					<>
					<span style={{ color: "green" }}>Votre formulaire semble correct</span>
					<Validate type="submit" value="Valider" style={{"background-color": `${colors.orange}`}}/>
					</>
				):
				(	
					<>
						<Validate 
						disabled={true} 
						type="submit" 
						value="Valider" 
						style={{"background-color": `${colors.redSoft}`}}
						/>
					</>
				)}
			</Form>
		</Wrapper>
	);
};

export default UserForm;
