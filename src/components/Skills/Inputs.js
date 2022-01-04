export function SkillInput({name, value, children, onChange, onClick, checked }) {
	return (
		<div>
			<input type="checkbox" id={name} name={name} value={value} checked={checked} onClick={onClick} onChange={onChange} />
			<label for="scales">{children}</label>
		</div>
	);
}
