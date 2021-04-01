import React, { useState } from 'react';
import './scss/App.scss';

const App = () => {
	const [fname, setFname] = useState("");
	const [password, setPassword] = useState("");

	const [firstName, setFirstName] = useState();
	const [updatePassword, setUpdatePassword] = useState();

	const inputEvent = (event) => {
		// console.log(event.target.value);
		setFname(event.target.value);
	}

	const inputEventTwo = (event) => {
		// console.log(event.target.value);
		setPassword(event.target.value);
	}

	const onSubmits = (event) => {
		event.preventDefault();
		setFirstName(fname);
		setUpdatePassword(password);
	}


	return(
		<>
			<form onSubmit = {onSubmits} method="post">
				<div className="wrapper">
					<h1>Hello { firstName } { updatePassword }</h1>
					<input type="text" placeholder="User Name" onChange = { inputEvent } value={fname} />
					<input type="password" placeholder="Password" onChange = { inputEventTwo } value={password} />
					<button type="submit">Click Me</button>
				</div>
			</form>
		</>
	);
}

export default App;