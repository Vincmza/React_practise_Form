export function SkillInput({name, value, children, onChange, checked }) {
	return (
		<div>
			<input type="checkbox" id={name} name={name} value={value} checked={checked} onChange={onChange} />
			<label for="scales">{children}</label>
		</div>
	);
}
