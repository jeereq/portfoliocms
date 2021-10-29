import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { login } from "../graphQl/queries";
import { NavLink } from "react-router-dom";
import { client } from "../index";
import {
	Container,
	Content,
	Form,
	Panel,
	FlexboxGrid,
	ButtonToolbar,
	Button
} from "rsuite";
export default function Signup() {
	const [state, setState] = useState({
		email: "",
		password: "",
		name: "",
		firstname: ""
	});
	const [eror, setError] = useState(false);

	const Change = (name, value) => {
		setState((etat) => ({ ...etat, [name]: value }));
	};

	const SubmitForm = () => {
		console.log(state);
		client
			.mutate({
				mutation: gql`
				mutation{
					signup(password: "${state.password}", email: "${state.email}",name:"${state.name}",firstname:"${state.firstname}") {
						_id
					}
				}
			`
			})
			.then(({ data }) => console.log(data))
			.catch((err) => console.log());
	};

	useEffect(() => {
		setError(false);
		document.title = "page d'inscription";
	}, []);

	useEffect(() => {}, [state]);

	return (
		<Container>
			<Content className="container display-flex align-items-center justify-content-center bg-purple">
				<FlexboxGrid justify="center" className="form  ">
					<FlexboxGrid.Item>
						<Panel header={<h3>S'inscrire</h3>} bordered className="bg-white">
							<Form onSubmitCapture={SubmitForm}>
								<Form.Group>
									<Form.ControlLabel>Adresse email</Form.ControlLabel>
									<Form.Control
										name="email"
										defaultValue={state.email}
										type="email"
										onChange={(e) => {
											Change("email", e);
										}}
									/>
								</Form.Group>
								<Form.Group>
									<Form.ControlLabel>Nom</Form.ControlLabel>
									<Form.Control
										name="name"
										type="text"
										defaultValue={state.name}
										autoComplete="off"
										onChange={(e) => {
											Change("name", e);
										}}
									/>
								</Form.Group>
								<Form.Group>
									<Form.ControlLabel>Prenom</Form.ControlLabel>
									<Form.Control
										name="firstname"
										type="text"
										defaultValue={state.firstname}
										autoComplete="off"
										onChange={(e) => {
											Change("firstname", e);
										}}
									/>
								</Form.Group>
								<Form.Group>
									<Form.ControlLabel>Mot de passe</Form.ControlLabel>
									<Form.Control
										name="password"
										type="password"
										defaultValue={state.password}
										autoComplete="off"
										onChange={(e) => {
											Change("password", e);
										}}
									/>
								</Form.Group>
								<Form.Group>
									<ButtonToolbar>
										<Button
											appearance="primary"
											className="bg-purple"
											onClick={SubmitForm}
										>
											Se Connecter
										</Button>
										<Button appearance="link" className="text-purple">
											<NavLink to="/">se Connecter ?</NavLink>
										</Button>
									</ButtonToolbar>
								</Form.Group>
							</Form>
						</Panel>
					</FlexboxGrid.Item>
				</FlexboxGrid>
			</Content>
		</Container>
	);
}
