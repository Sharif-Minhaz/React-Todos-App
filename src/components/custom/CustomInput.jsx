import React from "react";

function CustomInput(props) {
	return (
		<input className={props.className} type={props.type} id={props.id} value={props.value} checked={props.checked} onChange={props.onChange} />
	);
}

export default CustomInput;
