import React from "react";
import PropTypes from "prop-types";
import GotService from "../services/GotService";
import {Link} from "react-router-dom";
import {Pagination} from "antd";

import "./LinksItem.scss";
import "antd/lib/pagination/style/index.css";
import SearchForm from "../common/SearchForm/SearchForm";

const LinksField = (props) => {
	const {title, site, description, icon} = props.item;

	return (
		<li className="flex just-between align-start links-item__list-item">
			<div className="flex flex-col align-start">
				<h4 className="links-item__list-item-head">
					{title}
				</h4>
				<a href="http://zakupki.gov.ru" className="link link-small">
					{site}
				</a>
			</div>
			<div className="links-item__list-item-descr">
				{description}
			</div>
			<div className="links-item__list-item-icon">
				<img src={icon} alt=""/>
			</div>
		</li>
	);
};

export {LinksField};

export default class LinksItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			perPage: 5,
			curPage: 1,
			link: {},
			linksItem: {
				body: [],
				totalCount: 0
			}
		};

		this.onChange = this.onChange.bind(this);
	}

	gotService = new GotService();

	componentDidMount() {
		this.gotService.getLink(this.props.id).then((link) => {
			this.setState({
				link: link
			});
		});
		this.gotService.getLinksItem(this.state.curPage, this.state.perPage).then((linksItem) => {
			this.setState({
				linksItem: linksItem
			});
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.curPage !== prevState.curPage) {
			this.gotService.getLinksItem(this.state.curPage, this.state.perPage).then((linksItem) => {
				this.setState({
					linksItem: linksItem
				});
			});
		}
	}

	onChange = (page) => {
		this.setState({
			curPage: page,
		});
	};

	render() {
		const {perPage, curPage} = this.state;
		const {title, color} = this.state.link;
		const {totalCount} = this.state.linksItem;

		const arrowLeft = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M10 13L5 8L10 3" stroke="#222222" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>;

		return (
			<section className="links-item">
				<div className={`links-item__bg links-item__bg-${color} container`}>
					<Link to="/links" className="flex align-center breadcrumb__link">{arrowLeft}Полезные ссылки</Link>
					<h2 className="title">{title}</h2>
					<SearchForm />
				</div>
				<div className="container">
					<ul className="links-item__list">
						{this.state.linksItem.body.map((item, i) => (
							<LinksField key={i} item={item}/>
						))}
					</ul>
					<Pagination current={curPage} pageSize={perPage} total={totalCount} onChange={this.onChange}/>
				</div>
			</section>
		);
	}
}

LinksItem.propTypes = {
	id: PropTypes.string,
	linksItem: PropTypes.object
};

LinksField.propTypes = {
	item: PropTypes.object,
	title: PropTypes.string,
	site: PropTypes.string,
	description: PropTypes.string,
	icon: PropTypes.string,
};
