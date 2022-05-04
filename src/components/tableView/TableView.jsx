import React from "react";
import RowItem from "./RowItem";
import { Table } from "reactstrap";
import PropTypes from "prop-types";

function TableView({ todos, toggleSelect, toggleComplete }) {
	return (
		<Table>
			<thead>
				<tr>
					<th>#</th>
					<th>Date</th>
					<th>Todo</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{todos.map((todo) => (
					<RowItem
						key={todo.id}
						todo={todo}
						toggleSelect={toggleSelect}
						toggleComplete={toggleComplete}
					/>
				))}
			</tbody>
		</Table>
	);
}

TableView.propTypes = {
	todos: PropTypes.array.isRequired,
	toggleSelect: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};

export default TableView;
