export function SkillInput({name, children, onClick, checked }) {
	return (
		<div>
			<input type="checkbox" id={name} name={name} checked={checked} onClick={onClick} />
			<label for="scales">{children}</label>
		</div>
	);
}
