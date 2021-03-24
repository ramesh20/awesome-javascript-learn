import React, { useState } from 'react';
// import Select from 'react-select';


function App() {
	// const state = useState();
	// current data is count
	// updated data setCount
	// useState is a hook
	// const [ count, setCount ] = useState(0);

	// let curDate = new Date();
	let newTime = new Date().toLocaleTimeString();

	const [ ctime, setCtime ] = useState(newTime);

	// method IncNum
	const RefreshTime = () => {
		// setCount(count + 1);
		let cnewTime = new Date().toLocaleTimeString();
		setCtime( cnewTime );
	}

	// method DecNum
	// const DecNum = () => {
	// 	setCount(count - 1);
	// 	console.log(this);

	// 	if( count == 0 ) {
	// 		setCount(0);
	// 	}
	// }

	return(
		<React.Fragment>
			<h1> { ctime } </h1>
			<button onClick = { RefreshTime }>Get time</button>
			{/* <button onClick = { IncNum }>Increment Num</button> */}
		</React.Fragment>
	);
}

export default App;