export function SkillInput({ name, value, children, onChange, onClick, checked }) {
	const level = ["Débutant", "Intermédiaire", "Confirmé", "Expert"];
	return (
		<div>
			<div>
				<input
					type="checkbox"
					id={name}
					name={name}
					value={value}
					checked={checked}
					onClick={onClick}
					onChange={onChange}
				/>
				<label for="scales">{children}</label>
			</div>
			<div>
				{checked === true && (
					<select name="level" id="level-select">
						<option value="">Choisissez votre niveau</option>
						{level.map((howSkilled, index) => (
							<option key={index} value={howSkilled}>
								{howSkilled}
							</option>
						))}
					</select>
				)}
			</div>
		</div>
	);
}
