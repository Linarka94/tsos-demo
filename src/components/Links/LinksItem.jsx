import React from "react";
import PropTypes from "prop-types";
import GotService from "../services/GotService";
import {Link} from "react-router-dom";
import SearchInput from "../common/SearchInput/SearchInput";
import {Pagination} from "antd";

import "./LinksItem.scss";
import "antd/lib/pagination/style/index.css";

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
			placeholder: "Поиск",
			size: "large",
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
		const {placeholder, size, perPage, curPage} = this.state;
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
					<form action="/" method="get" className="links-item__form w-100">
						<div className="faq__search">
							<SearchInput placeholder={placeholder} size={size}/>
						</div>
						<div className="faq__select-wrap flex just-between">
							<div className="faq__select">
								<select name="obr" id="obr" className="select2" data-placeholder="Образование">
									<option value=""/>
									<option value="1">Среднее</option>
									<option value="2">Высшее-бакалавр</option>
									<option value="3">Высшее-магистр</option>
									<option value="4">Аспирант</option>
									<option value="5">Педагогическое</option>
								</select>
							</div>
							<div className="faq__select">
								<select name="dis" id="dis" className="select2" data-placeholder="Регион">
									<option value=""/>
									<option value="1">16</option>
									<option value="2">17</option>
									<option value="3">Татарстан</option>
									<option value="4">РТ</option>
								</select>
							</div>
							<div className="faq__select">
								<select name="org" id="org" className="select2" data-placeholder="Образовательная организация">
									<option value=""/>
									<option value="1">Организация 1</option>
									<option value="2">Организация 2</option>
									<option value="3">Организация 3</option>
									<option value="4">Организация 4</option>
									<option value="5">Организация 5</option>
								</select>
							</div>
						</div>
					</form>
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
