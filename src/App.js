import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/login";
import Signup from "./screens/signup";

function App() {
	return (
		<Switch>
			<Route path="/home" component={Home} />
			<Route path="/signup" component={Signup} />
			<Route path="/" component={Login} />
		</Switch>
	);
}

export default App;
