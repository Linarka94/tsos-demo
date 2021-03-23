import React from "react";
import MyTabs from "../common/Tab/Tab";
import Empty from "../common/Empty/Empty";
import SearchInput from "../common/SearchInput/SearchInput";

import "./Faq.scss";

export default class Faq extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			placeholder: "Вопрос",
			size: "large",
		};
	}

	render() {
		const {placeholder, size} = this.state;

		return (
			<section className="faq">
				<div className="head faq__head">
					<div className="container faq__container">
						<h2 className="title">Часто задаваемые вопросы</h2>
						<form action="/" method="get" className="faq__form w-100">
							<div className="faq__search">
								<SearchInput placeholder={placeholder} size={size} />
							</div>
							<div className="faq__select-wrap flex just-between">
								<div className="faq__select">
									<select name="obr" id="obr" className="select2" data-placeholder="Образование">
										<option value="" />
										<option value="1">Среднее</option>
										<option value="2">Высшее-бакалавр</option>
										<option value="3">Высшее-магистр</option>
										<option value="4">Аспирант</option>
										<option value="5">Педагогическое</option>
									</select>
								</div>
								<div className="faq__select">
									<select name="dis" id="dis" className="select2" data-placeholder="Регион">
										<option value="" />
										<option value="1">16</option>
										<option value="2">17</option>
										<option value="3">Татарстан</option>
										<option value="4">РТ</option>
									</select>
								</div>
								<div className="faq__select">
									<select name="org" id="org" className="select2" data-placeholder="Образовательная организация">
										<option value="" />
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
				</div>
				<MyTabs />
				<Empty />
			</section>
		);
	}
}
