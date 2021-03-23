import React from "react";
import GotService from "../services/GotService";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../common/Button/Button";

import "./Faq.scss";
import "./FaqItem.scss";

export default class FaqItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			q: "",
			a: "",
			answer: {}
		};
	}

	gotService = new GotService();

	componentDidMount() {
		this.gotService.getAnswer(this.props.faqId).then((answer) => {
			this.setState({
				answer
			});
		});
	}

	render() {
		const {q, a} = this.state.answer;

		const arrowLeft = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M10 13L5 8L10 3" stroke="#222222" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>;

		return(
			<section className="faq">
				<div className="head">
					<div className="container">
						<Link to="/faq" className="breadcrumb__link flex align-center">
							{arrowLeft}
							Часто задаваемые вопросы
						</Link>
					</div>
					<div className="container faq__container faq__detail">
						<h3 className="faq__detail-title">
							{q}
						</h3>
						<p
							className="faq__detail-text"
							dangerouslySetInnerHTML={{__html: a}}
						>
						</p>
						<Button href={"#"} secondary small>Поделиться</Button>
					</div>
				</div>
			</section>
		);
	}
}

FaqItem.propTypes = {
	match: PropTypes.object,
	q: PropTypes.string,
	a: PropTypes.string,
	faqId: PropTypes.string
};
