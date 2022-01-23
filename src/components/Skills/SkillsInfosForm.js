import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
//components
import { SkillInput } from "./Inputs";
//context
import { FrontSkillsContext, BackSkillsContext } from "../../context/index";
//style
import {WrapperContainer,BackButton,InputBack,Wrapper,SkillContainer,TitleContainer,Title,Header,HideAndDisplayContainer,HideAndDisplay,Boxes,ImgContainer,Img,LabelContainer}from "../../style/Skills/SkillsInfosStyle"

//front skill icons
import html from "../../assets/1_front/html.png"
import css from "../../assets/1_front/css3.png"
import javascript from "../../assets/1_front/js.png"
import react from "../../assets/1_front/react.png"
import vue from "../../assets/1_front/vue.png"
import angular from "../../assets/1_front/angular.svg"
import ember from "../../assets/1_front/ember.png"
// //back skills icons
import php from "../../assets/2_back/php.png"
import ruby from "../../assets/2_back/ruby.png"
import symfony from "../../assets/2_back/symfony.png"
import node from "../../assets/2_back/nodejs.jpg"
import python from "../../assets/2_back/python.png"
import sql from "../../assets/2_back/sql.png"
import sequelize from "../../assets/2_back/sequelize.png"
import postgre from "../../assets/2_back/postgre.png"

const SkillsInfosForm = () => {
	const { frontEndSkills, setFrontEndSkills } = useContext(FrontSkillsContext);
	const { backEndSkills, setBackEndSkills } = useContext(BackSkillsContext);
	let navigate = useNavigate()
	const handleBack = ()=>{
		navigate("/")
	}
	const availableFrontSkills = [
		{ id: "html", label: "HTML5", type: "frontend", image: html},
		{ id: "css", label: "CSS3", type: "frontend", image: css },
		{ id: "js", label: "Javascript", type: "frontend", image: javascript },
		{ id: "react", label: "React.js", type: "frontend", image: react },
		{ id: "vue", label: "Vue.js", type: "frontend", image: vue },
		{ id: "angular", label: "Angular", type: "frontend", image: angular },
		{ id: "ember", label: "Ember", type: "frontend", image: ember },
	];
	const availableBackSkills = [
		{ id: "php", label: "PHP", type: "backend", image: php },
		{ id: "ruby", label: "Ruby", type: "backend", image: ruby },
		{ id: "symfony", label: "Symfony", type: "backend", image: symfony },
		{ id: "nodejs", label: "Node.js", type: "backend", image: node },
		{ id: "python", label: "Python", type: "backend", image: python },
		{ id: "sql", label: "SQL", type: "backend", image: sql },
		{ id: "sequelize", label: "Sequelize", type: "backend", image: sequelize },
		{ id: "postgresql", label: "PostegreSQL", type: "backend", image: postgre },
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
				const index = availableFrontSkills.findIndex(elem=>elem.id === e.target.value)
				const labelValue = availableFrontSkills[index].label
				setFrontEndSkills((previousValue) => [
					...previousValue,
					{ id: e.target.value, label: labelValue, level: "" },
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
				const index = availableBackSkills.findIndex(elem=>elem.id === e.target.value)
				const labelValue = availableBackSkills[index].label
				setBackEndSkills((previousValue) => [
					...previousValue,
					{ id: e.target.value, label:labelValue, level: "" },
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
										{<LabelContainer>
											<div>{skill.label}</div>
											<ImgContainer><Img src={skill.image} alt={skill.id}/></ImgContainer>
										</LabelContainer>}
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
										value="Masquer"
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
										{<LabelContainer>
											<div>{skill.label}</div>
											<ImgContainer><Img src={skill.image} alt={skill.id}/></ImgContainer>
										</LabelContainer>}
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
