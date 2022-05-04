import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import PropTypes from "prop-types";

function Bulk({ clearSelected, clearCompleted, reset }) {
	return (
		<ButtonGroup>
			<Button color="danger" className="text-nowrap" onClick={clearSelected}>
				Clear Selected
			</Button>
			<Button color="danger" className="text-nowrap" onClick={clearCompleted}>
				Clear Completed
			</Button>
			<Button color="danger" className="text-nowrap" onClick={reset}>
				Reset
			</Button>
		</ButtonGroup>
	);
}

Bulk.propTypes = {
	clearSelected: PropTypes.func.isRequired,
	clearCompleted: PropTypes.func.isRequired,
	reset: PropTypes.func.isRequired,
};

export default Bulk;
