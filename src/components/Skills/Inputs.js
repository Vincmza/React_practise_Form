import {useContext} from "react";
import { FrontSkillsContext, BackSkillsContext } from "../../context/index";
import styledComponents, { keyframes }  from "styled-components";

const skillsDisplayed = keyframes`
	from {
		opacity:0;
		transform: translate(-50%,50%);
	}
	to {
		opacity:1;
		transform: translate(0%,0%);
	}
`
const OneBox = styledComponents.div`
	animation: 400ms ${skillsDisplayed} linear both;
	padding:10px;
	animation-delay: ${(props)=>props.children[0].props.anim}ms;
	display:flex;
	align-items:center;
`
const BoxLabel = styledComponents.label`
	padding:0px 10px;
`
const Select = styledComponents.select`
	background-color: #c5c6f0;
	border:1px solid #a9eb99;
	border-radius:5px;
	padding:2px;
`
export function SkillInput({ name, value, children, onChange, onClick, checked, skilltype, anim }) {

	const {frontEndSkills, setFrontEndSkills}=useContext(FrontSkillsContext)
	const {backEndSkills, setBackEndSkills}=useContext(BackSkillsContext)
	const level = ["Débutant", "Intermédiaire", "Confirmé", "Expert"];

	const handleLevel = (type,name,e)=>{
		if(type === "frontend"){
			if(frontEndSkills.some(elem=>elem.id === name)){
				const array = [...frontEndSkills]
				const index = array.findIndex(elem => elem.id === name)
				array[index].level = e.target.value
				setFrontEndSkills(()=>[...array])	
			}
		} else if (type === "backend"){
			if(backEndSkills.some(elem=>elem.id === name)){
				const array = [...backEndSkills]
				const index = array.findIndex(elem => elem.id === name)
				array[index].level = e.target.value
				setBackEndSkills(()=>[...array])	
			}
		}
	}
	return (
		<div>
			<OneBox>
				<input
					type="checkbox"
					id={name}
					name={name}
					value={value}
					skilltype={skilltype}
					checked={checked}
					onClick={onClick}
					onChange={onChange}
					anim={anim}
				/>
				<BoxLabel for="scales">{children}</BoxLabel>
			</OneBox>
			<div>
				{checked === true && (
					<Select name="level" id="level-select" onChange={(e)=>handleLevel(skilltype,name,e)}>
						<option value="">Choisissez votre niveau</option>
						{level.map(level => (
							<option key={level} value={level}>
								{level}
							</option>
						))}
					</Select>
				)}
			</div>
		</div>
	);
}
