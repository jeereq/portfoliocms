import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	HttpLink,
	from
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { BrowserRouter } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
import "./assets/style/color.scss";
import "./assets/style/index.scss";

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.map(({ message, location, path }) => {
			console.log(message);
		});
	}
});

const link = from([
	errorLink,
	new HttpLink({ uri: "http://portfolioapigraphql.herokuapp.com/graphql" })
]);

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: link
});

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
