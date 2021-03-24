import React from "react";
import MyTabs from "../common/Tab/Tab";
import Empty from "../common/Empty/Empty";
// import SearchInput from "../common/SearchInput/SearchInput";

import "./Faq.scss";
import SearchForm from "../common/SearchForm/SearchForm";

export default class Faq extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="faq">
				<div className="head faq__head">
					<div className="container faq__container">
						<h2 className="title">Часто задаваемые вопросы</h2>
						<SearchForm />
					</div>
				</div>
				<MyTabs />
				<Empty />
			</section>
		);
	}
}
