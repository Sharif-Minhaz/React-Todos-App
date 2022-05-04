import React from "react";
import { Button } from "reactstrap";
import CustomInput from "../custom/CustomInput";
import PropTypes from "prop-types";

function RowItem({ todo, toggleSelect, toggleComplete }) {
	return (
		<tr title={todo.description}>
			<td scope="row">
				<CustomInput
					type="checkbox"
					id={todo.id}
					checked={todo.isSelect}
					className="form-check-input"
					onChange={() => toggleSelect(todo.id)}
				/>
			</td>
			<td>{todo.time.toDateString()}</td>
			<td>{todo.text}</td>
			<td>
				<Button
					color={todo.isComplete ? "danger" : "success"}
					onClick={() => toggleComplete(todo.id)}
				>
					{todo.isComplete ? "Completed" : "Running"}
				</Button>
			</td>
		</tr>
	);
}

RowItem.propTypes = {
	todo: PropTypes.object.isRequired,
	toggleSelect: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};

export default RowItem;
