import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import PropTypes from "prop-types";

function Filter({ handleFilter, filter }) {
	return (
		<ButtonGroup>
			<Button
				className={filter === "all" ? "active" : ""}
				onClick={() => handleFilter("all")}
			>
				All
			</Button>
			<Button
				className={filter === "running" ? "active" : ""}
				onClick={() => handleFilter("running")}
			>
				Running
			</Button>
			<Button
				className={filter === "completed" ? "active" : ""}
				onClick={() => handleFilter("completed")}
			>
				Completed
			</Button>
		</ButtonGroup>
	);
}

Filter.propTypes = {
	handleFilter: PropTypes.func.isRequired,
};

export default Filter;
