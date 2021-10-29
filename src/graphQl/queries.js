import { gql } from "@apollo/client";

export const users = gql`
	query {
		users {
			name
			_id
			email
			firstname
			password
		}
	}
`;

export const login = gql`
	mutation login($password: String!, $email: String!) {
		login(password: $password, email: $email) {
			email
			token
			name
			firstname
		}
	}
`;
