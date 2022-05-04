import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Todos from "./components/todos/Todos";

class App extends Component {
	render() {
		return (
			<Container className="my-3">
				<Row>
					<Col>
						<Todos />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
