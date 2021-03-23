import React from 'react';
import Card from './component/Card'
import rawData from './component/Data'

function ncard(val, ind, arr) {
	return(
		<Card
			cardtitle = { val.ctitle }
			cardaddress = { val.caddress }
			cardurl = { val.curl }
			cardimage = { val.cimage }
		/>
	);
}

function App() {
	return(
		rawData.map(ncard)
	);
}

export default App;