import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Home, Projects, Initiatives } from "./Pages";
import { Navbar, SideLinks, Footer } from "./Components";
import "./App.css";

function App() {
	return (
		<HashRouter>
			<div className="app">
				<Navbar />
				<Switch>
					<Redirect from="/" to="/home" exact />
					<Route exact path="/home" component={Home} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/initiatives" component={Initiatives} />
				</Switch>
				<Footer />
				<SideLinks
					fb="https://www.facebook.com/rathijayvardhan/"
					insta="https://www.instagram.com/jayvardhan.rathi/"
					linkedIn="https://www.linkedin.com/in/rathi406/"
					medium="https://medium.com/@ourmine"
					twitter="https://twitter.com/ml__engineer"
					utube="https://www.youtube.com/channel/UCjFDgCGGoLDsCXKrwdTDZ-g"
				/>
			</div>
		</HashRouter>
	);
}

export default App;
