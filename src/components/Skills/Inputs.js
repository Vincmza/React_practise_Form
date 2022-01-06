import {useContext} from "react";
import { FrontSkillsContext, BackSkillsContext } from "../../context/index";

export function SkillInput({ name, value, children, onChange, onClick, checked, skillType }) {

	const {frontEndSkills, setFrontEndSkills}=useContext(FrontSkillsContext)
	const {backEndSkills, setBackEndSkills}=useContext(BackSkillsContext)
	const level = ["Débutant", "Intermédiaire", "Confirmé", "Expert"];

	const handleLevel = (type,name,e)=>{
		if(type === "frontend"){
			if(frontEndSkills.some(elem=>elem.id === name)===true){
				setFrontEndSkills((previousValue)=>[...previousValue, {id:name,level:e.target.value}])
			}
		} else if (type === "backend"){
			if(backEndSkills.some(elem=>elem.id === name)===true){
				setBackEndSkills((previousValue)=>[...previousValue, {id:name,level:e.target.value}])
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
					skillType={skillType}
					checked={checked}
					onClick={onClick}
					onChange={onChange}
				/>
				<label for="scales">{children}</label>
			</div>
			<div>
				{checked === true && (
					<select name="level" id="level-select" onChange={(e)=>handleLevel(skillType,name,e)}>
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
