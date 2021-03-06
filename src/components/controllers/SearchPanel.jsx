import React from "react";
import { Input, Button } from "reactstrap";
import PropTypes from "prop-types";

function SearchPanel({ term, handleSearch, toggleForm }) {
	return (
		<div className="d-flex">
			<Input
				placeholder="Enter search term"
				onChange={(e) => handleSearch(e.target.value)}
				value={term}
				className="me-2"
			/>
			<Button color="success" onClick={toggleForm}>
				Create
			</Button>
		</div>
	);
}

SearchPanel.propTypes = {
    term: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired,
}

export default SearchPanel;
