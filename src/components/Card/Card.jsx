import React from "react";
import "./Card.scss";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			color: "",
			id: 0
		};
	}

	componentDidMount() {
		this.setState({
			title: this.props.data.title,
			color: this.props.data.color,
			id: this.props.data.id
		});
	}


	render() {
		const {title, color, id} = this.state;

		const arrowRight = <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M7.5 24H40.5" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M27 10.5L40.5 24L27 37.5" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>;

		return (
			<Link to={`/links/${id}`} className={`flex flex-col just-between card card-${color}`}>
				<span className="card__shadow" />
				<span className="card__title">{title}</span>
				<span className="card__icon">{arrowRight}</span>
			</Link>
		);
	}
}

Card.propTypes = {
	data: PropTypes.object,
	title: PropTypes.string,
	color: PropTypes.string,
	id: PropTypes.number,
};
