import React from "react";
import CustomInput from "../custom/CustomInput";
import { ListGroupItem, Button } from "reactstrap";
import PropTypes from "prop-types";

function ListItem({ todo, toggleSelect, toggleComplete }) {
	return (
		<ListGroupItem className="d-flex py-3 align-items-center" title={todo.description}>
			<CustomInput
				type="checkbox"
				id={todo.id}
				checked={todo.isSelect}
				className="form-check-input"
				onChange={() => toggleSelect(todo.id)}
			/>
			<div className="mx-4">
				<h4 className="fw-normal font-arial">{todo.text}</h4>
				<p className="mb-0 form-text text-muted">{todo.time.toDateString()}</p>
			</div>
			<Button
				className="ms-auto"
				color={todo.isComplete ? "danger" : "success"}
				onClick={() => toggleComplete(todo.id)}
			>
				{todo.isComplete ? "Completed" : "Running"}
			</Button>
		</ListGroupItem>
	);
}

ListItem.propTypes = {
	todo: PropTypes.object.isRequired,
	toggleSelect: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};

export default ListItem;
