import React from 'react';

//stateless functional component action
//steps: make a const ... then, take out this since no longer needed, because you already have props integrated
const Action = (props) => (
	<div>
		<button className = "big-button" onClick = {props.handlePick}
		disabled={!props.hasOptions}
		>
		What should I do?
		</button>	
	</div>

);

export default Action;
