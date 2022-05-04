import React from "react";
import { Row, Col } from "reactstrap";
import SearchPanel from "./SearchPanel";
import PropTypes from "prop-types";
import Filter from "./Filter";
import Bulk from "./Bulk";
import View from "./View";

function Controllers({
	term,
	view,
	handleSearch,
	toggleForm,
	handleFilter,
	changeView,
	clearSelected,
	clearCompleted,
	reset,
	filter,
}) {
	return (
		<div>
			<SearchPanel term={term} handleSearch={handleSearch} toggleForm={toggleForm} />
			<Row className="my-4">
				<Col md={{ size: 4 }} sm={{ size: 6 }} className="xs-12">
					<Filter handleFilter={handleFilter} filter={filter} />
				</Col>
				<Col md={{ size: 4 }} sm={{ size: 6 }} className="xs-12 my-2">
					<View view={view} changeView={changeView} />
				</Col>
				<Col md={{ size: 4 }} sm={{ size: 6 }} className="xs-12 text-left d-flex my-1">
					<div className=" ms-auto">
						<Bulk
							clearCompleted={clearCompleted}
							clearSelected={clearSelected}
							reset={reset}
						/>
					</div>
				</Col>
			</Row>
		</div>
	);
}

Controllers.propTypes = {
	term: PropTypes.string.isRequired,
	view: PropTypes.string.isRequired,
	filter: PropTypes.string.isRequired,
	handleSearch: PropTypes.func.isRequired,
	toggleForm: PropTypes.func.isRequired,
	handleFilter: PropTypes.func.isRequired,
	changeView: PropTypes.func.isRequired,
	clearCompleted: PropTypes.func.isRequired,
	clearSelected: PropTypes.func.isRequired,
	reset: PropTypes.func.isRequired,
};

export default Controllers;
