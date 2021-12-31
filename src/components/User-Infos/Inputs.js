//LASTNAME AND FIRSTNAME INPUTS
export function Field({ name, value, onChange, children, minLength, maxLength }) {
	
	return (
		<div>
			<label htmlFor={name}>{children}</label>
			<input
				type="text"
				value={value}
				onChange={onChange}
				id={name}
				name={name}
				className="form-control"
				pattern="[a-zA-Z-àáâãäåçèéêëìíîïðòóôõöùúûüýÿ' ]{1,}"
				placeholder={name}
				minLength={minLength}
				maxLength={maxLength}
				required
			/>
		</div>
	);
}
//BIRTHDATE INPUT (CALENDAR TYPE)
export function BirthDate({ name, value, onChange, children, minLength }) {
	let today = new Date();
	let dd = today.getDate().toString().padStart(2,"0");
	let mm = (today.getMonth()+ 1).toString().padStart(2,"0") ; //January is 0!
	let yyyy = today.getFullYear();
	today = yyyy + "-" + mm + "-" + dd;
	return (
		<div>
			<label htmlFor={name}>{children}</label>
			<input
				type="date"
				value={value}
				onChange={onChange}
				id={name}
				name={name}
				max={today}
				min={minLength}
				className="form-birthdate"
				required
			/>
		</div>
	);
}
//EMAIL INPUT
export function Email({ name, value, onChange, children, minLength, maxLength }) {
	return (
		<div>
			<label htmlFor={name}>{children}</label>
			<input
				type="email"
				value={value}
				onChange={onChange}
				id={name}
				name={name}
				className="form-email"
				placeholder="example@gmail.com"
				minLength={minLength}
				maxLength={maxLength}
				required
			/>
		</div>
	);
}
//PHONE INPUT (TYPE TEL)
export function Phone({ name, value, onChange, children }) {
	return (
		<div>
			<label htmlFor={name}>{children}</label>
			<input
				type="tel"
				value={value}
				onChange={onChange}
				id={name}
				name={name}
				className="form-phone"
				pattern="^(0)([0-9]){9}$"
				placeholder="0682357322 facultatif"
			/>
		</div>
	);
}
//URL INPUT TO ALLOW USER TO DROP GITHUB URL
export function GitHub({ name, value, onChange, children }) {
	return (
		<div>
			<label htmlFor={name}>{children}</label>
			<input
				type="url"
				value={value}
				onChange={onChange}
				id={name}
				name={name}
				className="form-url"
				pattern="https://.*"
				placeholder="https:// facultatif"
			/>
		</div>
	);
}
//RADIO INPUT TO DISPLAY USER'S IDENTITY INPUTS RELATED
export function RadioButton({ name, value, children, onClick, checked }) {
	return (
		<div>
			<input
				type="radio"
				value={value}
				id={name}
				name={name}
				onClick={onClick}
				checked={checked}
				className="radio-button"
			/>
			<label htmlFor={name}>{children}</label>
		</div>
	);
}
