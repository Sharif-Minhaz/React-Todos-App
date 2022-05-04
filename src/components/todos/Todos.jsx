import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import TableView from "../tableView/TableView";
import ListView from "../listView/ListView";
import Controllers from "../controllers/Controllers";
import TodoForm from "../todoForm/TodoForm";

class Todos extends Component {
	state = {
		todos: [
			{
				id: "343kj-sd@-swc&skj",
				text: "JS Tutorial",
				description:
					"JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.",
				time: new Date(),
				isComplete: false,
				isSelect: false,
			},
			{
				id: "34&3kj-sd@-$sk&je&e",
				text: "React 3rd Project",
				description:
				"Stream's chat API, SDK and chat components are ready for you. Try Stream's live demo now. Build real-time chat. Rapidly ship in-app messaging with our reliable infrastructure.",
				time: new Date(),
				isComplete: false,
				isSelect: false,
			},
			{
				id: "343kj-sd@-$sk&jee",
				text: "Typography Solution",
				description: "The solution is hard. But I have to try my best within 3 days.",
				time: new Date(),
				isComplete: true,
				isSelect: false,
			},
		],
		isTodoOpenForm: false,
		searchTerm: "",
		view: "list",
		filter: "all",
	};

	toggleSelect = (todoId) => {
		const todos = [...this.state.todos];
		const todo = todos.find((t) => t.id === todoId);
		todo.isSelect = !todo.isSelect;
		this.setState({ todos });
	};

	toggleComplete = (todoId) => {
		const todos = [...this.state.todos];
		const todo = todos.find((t) => t.id === todoId);
		todo.isComplete = !todo.isComplete;
		this.setState({ todos });
	};

	toggleForm = () => {
		this.setState({
			isTodoOpenForm: !this.state.isTodoOpenForm,
		});
	};

	handleSearch = (value) => {
		this.setState({ searchTerm: value });
	};

	createTodo = (todo) => {
		todo.id = Date.now();
		todo.time = new Date();
		todo.isComplete = false;
		todo.isSelect = false;
		const todos = [todo, ...this.state.todos];
		this.setState({ todos });
		this.toggleForm();
	};

	changeView = (event) => {
		this.setState({ view: event.target.value });
	};

	handleFilter = (filter) => {
		this.setState({ filter });
	};

	clearCompleted = () => {
		const todos = this.state.todos.filter((todo) => !todo.isComplete);
		this.setState({ todos });
	};

	clearSelected = () => {
		const todos = this.state.todos.filter((todo) => !todo.isSelect);
		this.setState({ todos });
	};

	reset = () => {
		this.setState({
			isTodoOpenForm: false,
			searchTerm: "",
			view: "list",
			filter: "all",
		});
	};

	performSearch = () => {
		return this.state.todos.filter((todo) =>
			todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase())
		);
	};

	performSearchFilter = (todos) => {
		const { filter } = this.state;
		if (filter === "completed") {
			return todos.filter((todo) => todo.isComplete);
		} else if (filter === "running") {
			return todos.filter((todo) => !todo.isComplete);
		} else {
			return todos;
		}
	};

	getView = () => {
		let todos = this.performSearch();
		todos = this.performSearchFilter(todos);
		return this.state.view === "list" ? (
			<ListView
				todos={todos}
				toggleComplete={this.toggleComplete}
				toggleSelect={this.toggleSelect}
			/>
		) : (
			<TableView
				todos={todos}
				toggleComplete={this.toggleComplete}
				toggleSelect={this.toggleSelect}
			/>
		);
	};

	render() {
		return (
			<div>
				<h1 className="display-4 text-center mb-5">React Todos</h1>
				<Controllers
					view={this.state.view}
					term={this.state.searchTerm}
					handleSearch={this.handleSearch}
					toggleForm={this.toggleForm}
					handleFilter={this.handleFilter}
					clearCompleted={this.clearCompleted}
					clearSelected={this.clearSelected}
					changeView={this.changeView}
					reset={this.reset}
					filter={this.state.filter}
				/>
				<div>{this.getView()}</div>
				<Modal isOpen={this.state.isTodoOpenForm} toggle={this.toggleForm}>
					<ModalHeader toggle={this.toggleForm}>Create new todo item</ModalHeader>
					<ModalBody>
						<TodoForm createTodo={this.createTodo} />
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

export default Todos;
