import {useContext} from "react";
import { FrontSkillsContext, BackSkillsContext } from "../../context/index";

export function SkillInput({ name, value, children, onChange, onClick, checked, skilltype }) {

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
			<div>
				<input
					type="checkbox"
					id={name}
					name={name}
					value={value}
					skilltype={skilltype}
					checked={checked}
					onClick={onClick}
					onChange={onChange}
				/>
				<label for="scales">{children}</label>
			</div>
			<div>
				{checked === true && (
					<select name="level" id="level-select" onChange={(e)=>handleLevel(skilltype,name,e)}>
						<option value="">Choisissez votre niveau</option>
						{level.map(level => (
							<option key={level} value={level}>
								{level}
							</option>
						))}
					</select>
				)}
			</div>
		</div>
	);
}
