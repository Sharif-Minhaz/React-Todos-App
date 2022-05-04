import React from "react";
import { ListGroup, ListGroupItem, CustomInput, Button } from "reactstrap";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

function ListView({ todos, toggleSelect, toggleComplete }) {
	return (
		<ListGroup>
			{todos.map((todo) => (
				<ListItem
					key={todo.id}
					todo={todo}
					toggleSelect={toggleSelect}
					toggleComplete={toggleComplete}
				/>
			))}
		</ListGroup>
	);
}

ListView.propTypes = {
	todos: PropTypes.array.isRequired,
	toggleSelect: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};

export default ListView;
