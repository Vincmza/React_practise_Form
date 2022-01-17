import React, { useState, useContext } from "react";
import styledComponents from "styled-components";
import { useNavigate } from "react-router-dom";

//components
import { SkillInput } from "./Inputs";
//context
import { FrontSkillsContext, BackSkillsContext } from "../../context/index";
import colors from "../../style/colors";


const WrapperContainer = styledComponents.div`
	background: linear-gradient(#999ceb, #a9eb99);
`
const BackButton = styledComponents.div`
	// border:2px solid green;
	padding:20px;
	display:flex;
	justify-content:center;
`
const InputBack = styledComponents.input`
	padding:5px 10px;
	border:none;
	background-color: ${colors.orange};
	box-shadow: 2px 2px 3px ${colors.shadow};
	border-radius:5px;
	transform: scale(1);
	transition:500ms;
	&:hover {
		transform:scale(1.2);
		cursor:pointer;
		background-color: ${colors.pink}	
	}
	&:active {
		background-color: ${colors.green};
	}
	
`
const Wrapper = styledComponents.div`
	// border:1px solid purple;
	display:flex;
	justify-content:space-around;
	padding:30px;
`;
const SkillContainer = styledComponents.div`
	// border:1px solid green;
	padding:30px;
	display:flex;
`;
const TitleContainer = styledComponents.div`
	// border:1px solid blue;
	text-align: center;
`;
const Title = styledComponents.h1`
	padding:10px;
	font-size:1.8em;
	text-shadow: 1px 1px 2px ${colors.shadow};
`;
const Header = styledComponents.div`
	display:flex;
	flex-direction:column;
	justify-content:center;
`;
const HideAndDisplayContainer = styledComponents.div`
	width:100%;
	padding:20px;
	// border:2px solid red;
	display:flex;
	justify-content:center;
`;
const HideAndDisplay = styledComponents.input`
	border:none;
	border-radius:15px;
	background-color: ${colors.orange};
	box-shadow: 2px 2px 3px ${colors.shadow};
	padding:5px 15px;
	max-width:80%;
	transform:scale(1);
	transition:500ms;
	:hover {
		transform:scale(1.2);
		cursor: pointer;
		background-color: ${colors.pink}
	}
	&:active {
		background-color: ${colors.green};
	}
`;
const Boxes = styledComponents.div`
	font-size: 1.2em;
	padding:20px;
	// border:1px solid yellow;
`;

const SkillsInfosForm = () => {
	const { frontEndSkills, setFrontEndSkills } = useContext(FrontSkillsContext);
	const { backEndSkills, setBackEndSkills } = useContext(BackSkillsContext);
	let navigate = useNavigate()
	const handleBack = ()=>{
		navigate("/")
	}
	const availableFrontSkills = [
		{ id: "HTML5", label: "HTML5", type: "frontend" },
		{ id: "CSS3", label: "CSS3", type: "frontend" },
		{ id: "Javascript", label: "Javascript", type: "frontend" },
		{ id: "React.js", label: "React.js", type: "frontend" },
		{ id: "Vue.js", label: "Vue.js", type: "frontend" },
		{ id: "Angular", label: "Angular", type: "frontend" },
		{ id: "Ember", label: "Ember", type: "frontend" },
	];
	const availableBackSkills = [
		{ id: "PHP", label: "PHP", type: "backend" },
		{ id: "Ruby", label: "Ruby", type: "backend" },
		{ id: "Symphony", label: "Symphony", type: "backend" },
		{ id: "Node.js", label: "Node.js", type: "backend" },
		{ id: "Python", label: "Python", type: "backend" },
		{ id: "SQL", label: "SQL", type: "backend" },
		{ id: "Sequelize", label: "Sequelize", type: "backend" },
		{ id: "PostgreSQL", label: "PostegreSQL", type: "backend" },
	];
	//STATE ALLOWS TO EITHER DISPLAY OR HIDE SKILLS
	const [displayListFront, setDisplayListFront] = useState(false);
	const [displayListBack, setDisplayListBack] = useState(false);
	//FUNCTION TO DISPLAY OR HIDE FRONT SKILLS
	const handleListFront = () => {
		setDisplayListFront((pv) => !pv);
	};
	//FUNCTION TO DISPLAY OR HIDE BACK SKILLS
	const handleListBack = () => {
		setDisplayListBack((pv) => !pv);
	};
	//STORING FRONT END SKILLS
	const handleCheckFront = (e) => {
		if (e.target.checked === true) {
			if (frontEndSkills.some((elem) => elem.id === e.target.value) === false) {
				setFrontEndSkills((previousValue) => [
					...previousValue,
					{ id: e.target.value, level: "" },
				]);
			}
		} else {
			const array = [...frontEndSkills];
			const index = array.findIndex((item) => item.id === e.target.value);
			array.splice(index, 1);
			setFrontEndSkills(array);
		}
	};
	//STORING BACKEND SKILLS
	const handleCheckBack = (e) => {
		if (e.target.checked === true) {
			if (backEndSkills.some((elem) => elem.id === e.target.value) === false) {
				setBackEndSkills((previousValue) => [
					...previousValue,
					{ id: e.target.value, level: "" },
				]);
			}
		} else {
			const array = [...backEndSkills];
			const index = array.findIndex((item) => item.id === e.target.value);
			array.splice(index, 1);
			setBackEndSkills(array);
		}
	};
	return (
		<WrapperContainer>
			<BackButton to="/">
				<InputBack type="button" value="Retour" onClick={handleBack} />
			</BackButton>
			<Wrapper>
				<SkillContainer>
					{displayListFront === false ? (
						<>
							<Header>
								<TitleContainer>
									<Title>Compétences</Title>
									<Title>frontend</Title>
								</TitleContainer>
								<HideAndDisplayContainer>
									<HideAndDisplay
										type="button"
										value="Afficher"
										onClick={handleListFront}
									/>
								</HideAndDisplayContainer>
							</Header>
						</>
					) : (
						<>
							<Header>
								<TitleContainer>
									<Title>Compétences</Title>
									<Title>frontend</Title>
								</TitleContainer>
								<HideAndDisplayContainer>
									<HideAndDisplay
										type="button"
										value="Masquer"
										onClick={handleListFront}
									/>
								</HideAndDisplayContainer>
							</Header>
							<Boxes>
								{availableFrontSkills.map((skill, index) => (
									<SkillInput
										anim={150 * (index + 1)}
										key={skill.id}
										name={skill.id}
										value={skill.id}
										skilltype={skill.type}
										onChange={handleCheckFront}
										checked={frontEndSkills.some(
											(elem) => elem.id === skill.id
										)}
									>
										{skill.label}
									</SkillInput>
								))}
							</Boxes>
						</>
					)}
				</SkillContainer>

				<SkillContainer>
					{displayListBack === false ? (
						<>
							<Header>
								<TitleContainer>
									<Title>Compétences</Title>
									<Title>backend</Title>
								</TitleContainer>
								<HideAndDisplayContainer>
									<HideAndDisplay
										type="button"
										value="Afficher"
										onClick={handleListBack}
									/>
								</HideAndDisplayContainer>
							</Header>
						</>
					) : (
						<>
							<Header>
								<TitleContainer>
									<Title>Compétences</Title>
									<Title>backend</Title>
								</TitleContainer>
								<HideAndDisplayContainer>
									<HideAndDisplay
										type="button"
										value="Afficher"
										onClick={handleListBack}
									/>
								</HideAndDisplayContainer>
							</Header>
							<Boxes>
								{availableBackSkills.map((skill, index) => (
									<SkillInput
										anim={150 * (index + 1)}
										key={skill.id}
										name={skill.id}
										value={skill.id}
										skilltype={skill.type}
										onChange={handleCheckBack}
										checked={backEndSkills.some((elem) => elem.id === skill.id)}
									>
										{skill.label}
									</SkillInput>
								))}
							</Boxes>
						</>
					)}
				</SkillContainer>
			</Wrapper>
		</WrapperContainer>
	);
};

export default SkillsInfosForm;
