import React from "react";
import "./Empty.scss";

export default class Empty extends React.Component {
	render() {
		return (
			<div className="empty container">
				<h3 className="empty__title">Ничего не нашлось</h3>
				<p className="empty__description">Попробуйте изменить значения фильтров</p>
			</div>
		);
	}
}
