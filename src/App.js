import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { blueA200 } from 'material-ui/styles/colors';
import './css/App.css';
import { Url } from "./env";
import Posts from "./components/posts/Posts";
import DashBoard from "./components/dashboard/DashBoard";

class App extends Component {
	render() {

		const muiTheme = getMuiTheme({
			appBar: {
				color: blueA200
			},
		  });

		return (<MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}><Router>
			<div>
				<Switch>
					<Route exact path={Url("_dashboard")} component={ DashBoard } />
					<Route exact path={Url("_posts")} component={ Posts } />
				</Switch>
			</div>
		</Router>
		</MuiThemeProvider>
		);
	}
}

export default App;