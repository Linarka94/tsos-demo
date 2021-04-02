import React from "react";

import {
	BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";
import Lib from "./components/lib/lib";
import News from "./components/News/News";
import Links from "./components/Links/Links";
import Main from "./components/main/main";
import Faq from "./components/Faq/Faq";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import FaqItem from "./components/Faq/FaqItem";
import LinksItem from "./components/Links/LinksItem";
import NewsDetail from "./components/News/NewsDetail";
import Auth from "./components/Auth/Auth";


export default class App extends React.Component {

	state = {
		error: false,
	};

	componentDidCatch() {
		console.log("error");
		this.setState({
			error: true
		});
	}

	render() {
		if (this.state.error) {
			return "Что-то пошло не так...";
		}

		return (
			<Router basename={process.env.PUBLIC_URL}>
				<ScrollToTop/>
				<div className="app">
					<Header/>
					<Switch>
						<Route path="/login" component={Auth} />
						<Route exact path="/" component={Main}/>
						<Route path="/library" component={Lib}/>
						<Route exact path="/news" component={News}/>
						<Route exact path="/news/:id" render={({match}) => {
							const {id} = match.params;
							return <NewsDetail id={id}
							/>;
						}}/>
						<Route exact path="/links" component={Links}/>
						<Route path="/links/:id" render={({match}) => {
							const {id} = match.params;
							return <LinksItem id={id}
							/>;
						}}
						/>
						<Route exact path="/faq" component={Faq}/>
						<Route path="/faq/:id" render={({match}) => {
							const {id} = match.params;
							return <FaqItem faqId={id}
							/>;
						}}/>
					</Switch>
					<Footer/>
				</div>
			</Router>
		);
	}
}
