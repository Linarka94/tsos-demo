import React from "react";
import PropTypes from "prop-types";
import {Input} from "antd";
import "antd/lib/input/style/index.css";
import "antd/lib/button/style/index.css";
import "./SearchInput.scss";

export default class SearchInput extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {placeholder, size} = this.props;
		const {Search} = Input;

		return (
			<div className="flex search-input">
				<Search placeholder={placeholder} allowClear size={size} enterButton="Найти" />
			</div>
		);
	}
}

SearchInput.propTypes = {
	placeholder: PropTypes.string,
	size: PropTypes.string,
};

SearchInput.defaultProps = {
	placeholder: "Вопрос",
	size: "large",
};
