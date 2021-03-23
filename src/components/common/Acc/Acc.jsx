import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./Acc.scss";
import Collapse from "@kunukn/react-collapse";
import cx from "classnames";
import Button from "../Button/Button";

export default class MyAcc extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			s: false,
			q: "",
			a: "",
			id: "",
			share: ""
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			s: !this.state.s
		});
	}

	componentDidMount() {
		this.setState({
			q: this.props.data.q,
			a: this.props.data.a,
			id: this.props.data.id,
			share: this.props.data.share,
		});
	}

	render() {
		const {q, a, id} = this.state;
		const plusSvg = <svg className={cx("plus", {"minus" : this.state.s})} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="horizontal-line" d="M3.75 12H20.25" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path className="vertical-line" d="M12 3.75V20.25" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>;

		return (
			<div className="faq__acc-wrap">
				<h4 onClick={this.toggle} className={cx("faq__acc-title", {"active" : this.state.s})}>{q}{plusSvg}</h4>
				<Collapse isOpen={this.state.s}>
					<div
						className="faq__acc-content"
						dangerouslySetInnerHTML={{__html: a}}
					/>
					<div className="faq__acc-btn">
						<Button href={"#"} secondary small>Поделиться</Button>
						<Link
							to={`/faq/${id}`}
							className="btn secondary small"
						>
							Открыть в новой вкладке
						</Link>
					</div>
				</Collapse>
			</div>
		);
	}
}

MyAcc.propTypes = {
	data: PropTypes.object,
	q: PropTypes.string,
	a: PropTypes.string,
	link: PropTypes.number
};
