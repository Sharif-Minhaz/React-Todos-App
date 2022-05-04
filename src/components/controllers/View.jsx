import React from "react";
import { Label } from "reactstrap";
import PropTypes from "prop-types";
import CustomInput from "../custom/CustomInput";

function View({ view, changeView }) {
	return (
		<div className="d-flex">
			<Label htmlFor="list-view" className="me-4 text-nowrap">
				<CustomInput
					type="radio"
					id="list-view"
					name="view"
					value="list"
					checked={view === "list"}
					className="d-inline-block me-1 form-check-input"
					onChange={changeView}
				/>
				List View
			</Label>
			<Label htmlFor="table-view" className="me-4 text-nowrap">
				<CustomInput
					type="radio"
					id="table-view"
					name="view"
					value="table"
					checked={view === "table"}
					className="d-inline-block me-1 form-check-input"
					onChange={changeView}
				/>
				Table View
			</Label>
		</div>
	);
}

View.propTypes = {
	view: PropTypes.string.isRequired,
	changeView: PropTypes.func.isRequired,
};

export default View;
