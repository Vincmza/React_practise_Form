import {useContext} from "react";
import { FrontSkillsContext, BackSkillsContext } from "../../context/index";

import {OneBox,BoxLabel,Select} from "../../style/Skills/InputsStyle"

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
					<Select name="level" id="level-select" anim={anim} onChange={(e)=>handleLevel(skilltype,name,e)}>
						<option value="">Votre niveau</option>
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
