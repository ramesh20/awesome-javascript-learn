import React, { useState } from 'react';
import './scss/App.scss'

const App = () => {
	const purple = '#800080';
	const [bg, setBg] = useState(purple);
	const [name, setName] = useState('Click Me');

	const bgChange = () => {
		let newBg = '#34495e';
		setBg(newBg);
		setName('Ouch');
	}

	const bgBack = () => {
		setBg(purple);
		setName('Double Click');
	}

	return(
		<>
			<div className="wrapper" style = { {backgroundColor: bg} }>
				<h1>Hello world</h1>
				<button onClick = { bgChange } onDoubleClick = { bgBack }>{ name }</button>
			</div>
		</>
	);
}

export default App;