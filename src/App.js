import {React, useState } from 'react';



const App = () => {
	let newTime = new Date().toLocaleTimeString();
	const [ctime, setCtime] = useState(newTime);


	const UpdatedTime = () => {
		newTime = new Date().toLocaleTimeString();
		setCtime(newTime);
	}

	setInterval(UpdatedTime, 1000);

	return(
		<>
			<h1> { ctime } </h1>
			<button onClick={UpdatedTime}>get time</button>
		</>
	);
}

export default App;