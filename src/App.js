import React, { useState } from 'react';
import './scss/App.scss';

const App = () => {
	// let name = '';
	const [cname, setCname] = useState("");
	const [fullName, setFullName] = useState();
	const inputEvent = (event) => {
		// console.log(event.target.value);
		setCname(event.target.value);
	}

	const onSubmit = () => {
		setFullName(cname);
	}


	return(
		<>
			<div className="wrapper">
				<h1>Hello { fullName }</h1>
				<input type="text" placeholder="Enter your name" onChange = { inputEvent } value={cname} />
				<button onClick = { onSubmit }>Click Me</button>
			</div>
		</>
	);
}

export default App;