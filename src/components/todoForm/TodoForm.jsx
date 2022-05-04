import React, { Component } from "react";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";

class TodoForm extends Component {
	state = {
		text: "",
		description: "",
	};
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.createTodo(this.state);
		event.target.reset();
		this.setState({ text: "", description: "" });
	};
	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<FormGroup>
					<Label>Enter Task</Label>
					<Input
						placeholder="Do some code"
						name="text"
						value={this.state.text}
						onChange={this.handleChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Describe Task</Label>
					<Input
						type="textarea"
						placeholder="Describe about your task"
						name="description"
						value={this.state.description}
						onChange={this.handleChange}
					/>
				</FormGroup>
				<Button type="submit">Create Task</Button>
			</Form>
		);
	}
}

TodoForm.propTypes = {
	createTodo: PropTypes.func.isRequired,
};

export default TodoForm;
