import React from "react";
import "./News.scss";
import Empty from "../common/Empty/Empty";
import cx from "classnames";
import GotService from "../services/GotService";
import NewsItem from "./NewsItem";
import Button from "../common/Button/Button";

export default class News extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeGrid: false,
			activeList: true,
			view: false,
			news: [],
			regNews: [],
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			activeGrid: !this.state.activeGrid,
			activeList: !this.state.activeList,
			view: !this.state.view
		});
	}

	gotService = new GotService();

	componentDidMount() {
		this.gotService.getNews().then((news) => {
			this.setState({
				news
			});
		});
		this.gotService.getRegionNews().then((regNews) => {
			this.setState({
				regNews
			});
		});
	}


	render() {
		const grid = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z"
				fill="white"/>
			<path
				d="M27.125 12.125H12.875C12.4608 12.125 12.125 12.4608 12.125 12.875V27.125C12.125 27.5392 12.4608 27.875 12.875 27.875H27.125C27.5392 27.875 27.875 27.5392 27.875 27.125V12.875C27.875 12.4608 27.5392 12.125 27.125 12.125Z"
				stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M20 12.125V27.875" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M27.875 20H12.125" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>;
		const list = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z"
				fill="white"/>
			<path d="M11.75 20H28.25" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M11.75 14H28.25" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M11.75 26H28.25" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>;

		return (
			<section className="container news">
				<div className="head flex-between-center">
					<h2 className="title">Новости</h2>
					<div className="news__view flex">
						<button
							className={cx("news__view-btn", {"active": this.state.activeGrid})}
							onClick={this.toggle}
						>
							{grid}
						</button>
						<button
							className={cx("news__view-btn", {"active": this.state.activeList})}
							onClick={this.toggle}
						>
							{list}
						</button>
					</div>
				</div>
				<form action="/" method="get" className="news__form">
					<div className="faq__select-wrap flex">
						<div className="faq__select">
							<select name="time" id="time" className="select2" data-placeholder="Образование">
								<option value="31">За неделю</option>
								<option value="12">За месяц</option>
								<option value="2021">За год</option>
							</select>
						</div>
						<div className="faq__select">
							<select name="obr" id="obr" className="select2" data-placeholder="Образование">
								<option value="1">Среднее</option>
								<option value="2">Высшее-бакалавр</option>
								<option value="3">Высшее-магистр</option>
								<option value="4">Аспирант</option>
								<option value="5">Педагогическое</option>
							</select>
						</div>
						<div className="faq__select">
							<select name="dis" id="dis" className="select2" data-placeholder="Регион">
								<option value="1">16</option>
								<option value="2">17</option>
								<option value="3">Татарстан</option>
								<option value="4">РТ</option>
							</select>
						</div>
						<div className="faq__select">
							<select name="org" id="org" className="select2" data-placeholder="Образовательная организация">
								<option value="1">Организация 1</option>
								<option value="2">Организация 2</option>
								<option value="3">Организация 3</option>
								<option value="4">Организация 4</option>
								<option value="5">Организация 5</option>
							</select>
						</div>
					</div>
				</form>
				<div
					className={cx("news__wrap flex just-between align-start", {"tile": this.state.view})}
				>
					<div className="news">
						<ul className="news__list">
							{this.state.news.map((item, i) => (
								<NewsItem key={i} data={item} />
							))}
						</ul>
						<Button
							secondary
							className="w-100"
							type={"button"}
						>
							Показать еще
						</Button>
					</div>
					<div className="news__side">
						<h4 className="news__side-title">В регионах</h4>
						<ul className="news__list">
							{this.state.regNews.map((item, i) => (
								<NewsItem key={i} data={item} />
							))}
						</ul>
					</div>
				</div>
				<Empty />
			</section>
		);
	}
}
