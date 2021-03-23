import React from "react";
import GotService from "../services/GotService";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../common/Button/Button";

import "./NewsDetail.scss";
import NewsItem from "./NewsItem";
import MyGallery from "../common/ImageGallery/ImageGallery";

export default class NewsDetail extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			news: {},
			allNews: [],
		};
	}

	gotService = new GotService();

	componentDidMount() {
		this.gotService.getNewsDetail(this.props.id).then((news) => {
			this.setState({
				news
			});
		});
		this.gotService.getNews().then((allNews) => {
			this.setState({
				allNews
			});
		});
	}

	render() {
		const {title, publication, src, text, source, subject} = this.state.news;

		const arrowLeft = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M10 13L5 8L10 3" stroke="#222222" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>;

		return (
			<section className="container">
				<div className="head">
					<Link to="/news" className="breadcrumb__link flex align-center">
						{arrowLeft}
						Назад
					</Link>
				</div>
				<div className="news__detail">
					<h3 className="news__detail-title">
						{title}
					</h3>
					<div className="news__detail-date">
						{publication}
					</div>
					<div className="news__detail-img">
						{src ? (
							<img src={src} alt=""/>
						) : ""}
					</div>
					<div className="news__detail-gallery">
						<MyGallery />
					</div>
					<div
						className="news__detail-text"
						dangerouslySetInnerHTML={{__html: text}}
					/>
					<div className="news__detail-info">
						<div className="news__detail-info-item flex">
							<h4>Источник</h4>
							<span>{source}</span>
						</div>
						<div className="news__detail-info-item flex">
							<h4>Субъект РФ</h4>
							<span>{subject}</span>
						</div>
					</div>
					<Button href={"#"} secondary>Поделиться</Button>
				</div>
				<div className="news__bottom">
					<h4 className="news__bottom-title">В регионах</h4>
					<ul className="news__list tile flex flex-wrap just-between align-start">
						{this.state.allNews.map((item, i) => (
							<NewsItem key={i} data={item} />
						))}
					</ul>
					<Button
						secondary
						className="w-100"
					>
						Показать еще
					</Button>
				</div>
			</section>
		);
	}
}

NewsDetail.propTypes = {
	match: PropTypes.object,
	title: PropTypes.string,
	publication: PropTypes.string,
	text: PropTypes.string,
	id: PropTypes.string
};
