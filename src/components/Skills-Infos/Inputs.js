export function SkillInput({name, value, children, onClick, checked }) {
	return (
		<div>
			<input type="checkbox" id={name} name={name} value={value} checked={checked} onClick={onClick} />
			<label for="scales">{children}</label>
		</div>
	);
}
