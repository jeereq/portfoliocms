import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { gql } from "@apollo/client";
import { client } from "../index";
import { NavLink, Redirect } from "react-router-dom";
import {
	Container,
	Content,
	Form,
	Panel,
	FlexboxGrid,
	ButtonToolbar,
	Button
} from "rsuite";

export default function Login() {
	const [state, setState] = useState({ email: "", password: "" });
	const [eror, setError] = useState(false);
	const [redirect, setRedirect] = useState(false);

	const Change = (name, value) => {
		setState((etat) => ({ ...etat, [name]: value }));
		setError(false);
	};
	const verify = () => {
		for (let key in state) {
			if (state[key] === "") {
				setError(false);
				return;
			}
		}
		setError(true);
	};

	const SubmitForm = () => {
		verify();
	};

	useEffect(() => {
		setError(false);
		document.title = "page de connexion";
	}, []);
	useEffect(() => {
		if (eror)
			client
				.query({
					query: gql`
				{
					login(password: "${state.password}", email: "${state.email}") {
						_id
						token
						name
						firstname
					}
				}
			`
				})
				.then(({ data: { login } }) => {
					console.log(login);
					setRedirect(true);
				})
				.catch((err) => console.log());
	}, [eror]);

	if (redirect)
		return (
			<>
				<Redirect to="/home" />
			</>
		);
	return (
		<Container>
			<Content className="container display-flex align-items-center justify-content-center bg-purple">
				<FlexboxGrid justify="center" className="form ">
					<FlexboxGrid.Item>
						<Panel header={<h3>Connection</h3>} bordered className="bg-white">
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
											<NavLink to="/signup"> Cree un compte ?</NavLink>
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
