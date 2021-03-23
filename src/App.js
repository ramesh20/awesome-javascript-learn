import React, { useEffect, useState } from 'react';


const App = () => {
	const state = useState();
	// console.log(state);

	let [count, setCount] =  useState(0);

	// let count = 0;
	const IncNum = () => {
		setCount(count + 1);
		// console.log("clicked " + count++);
	}

	const DecNum = () => {
		setCount(count - 1);

		if(count == 0) {
			setCount(0);
		}
	}

	return(
		<React.Fragment>
			<h1> { count } </h1>
			<button onClick={ IncNum }> Increment </button>
			<button onClick={ DecNum }> Decrement </button>
		</React.Fragment>
	);
}

export default App;