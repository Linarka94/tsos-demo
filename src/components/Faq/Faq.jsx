import React from "react";
import MyTabs from "../common/Tab/Tab";
import Empty from "../common/Empty/Empty";

import "./Faq.scss";
import SearchForm from "../common/SearchForm/SearchForm";


const options = {
	learning: [
		{
			value: "0", label: "Без образования"
		},
		{
			value: "1", label: "Среднее"
		},
		{
			value: "2", label: "Среднее специальное"
		},
		{
			value: "3", label: "Высшее"
		},
		{
			value: "4", label: "Два и более высших"
		},
	],
	subject: [
		{
			value: "RT", label: "Республика Татарстан",
		},
		{
			value: "RB", label: "Республика Башкортостан",
		},
		{
			value: "MSK", label: "Москва",
		},
		{
			value: "SPB", label: "Санкт-Петербург",
		},
		{
			value: "ALT", label: "Алтай",
		}
	],
	organization: [
		{
			value: "MPR", label: "Министерство просвещения Российской Федерации"
		},
		{
			value: "MLR", label: "Министерство образования Российской Федерации"
		},
		{
			value: "MSR", label: "Министерство спорта Российской Федерации"
		},
		{
			value: "SCH-180", label: "Школа №180"
		},
		{
			value: "SCH-G-2", label: "Гимназия №2"
		}
	]
};

const placeholders = ["Образование", "Субъект РФ", "Образовательная организация"];

export default class Faq extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="faq">
				<div className="head faq__head">
					<div className="container faq__container">
						<h2 className="title">Часто задаваемые вопросы</h2>
						<SearchForm
							options={options}
							placeholders={placeholders}
						/>
					</div>
				</div>
				<MyTabs />
				<Empty />
			</section>
		);
	}
}
