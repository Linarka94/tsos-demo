import React from "react";
import "./Links.scss";
import Card from "../Card/Card";
import GotService from "../services/GotService";
import PropTypes from "prop-types";

export default class Links extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			links: [],
		};
	}

	gotService = new GotService();

	componentDidMount() {
		this.gotService.getLinks().then((links) => {
			this.setState({
				links: links
			});
		});
	}

	render() {
		return (
			<section className="container links">
				<div className="head">
					<h2 className="title">Полезные ссылки</h2>
					<h3 className="links__description">Полезные сервисы для работы, учёбы, отдыха и не только. Добавляйте в
						закладки: что-то точно пригодится.</h3>
				</div>
				<div className="card-wrap flex flex-wrap just-between">
					{this.state.links.map((item, i) => (
						<Card key={i} data={item} />
					))}
				</div>
			</section>
		);
	}
}

Links.propTypes = {
	links: PropTypes.array,
};
