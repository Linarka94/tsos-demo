import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import Select from "react-select";

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

import "./SearchForm.scss";

const SearchForm = () => {

	const {learning, subject, organization} = options;
	const boxShadowInFocus = "-3px 3px 0px #CBE3FF, 3px -3px 0px #CBE3FF, -3px -3px 0px #CBE3FF, 3px 3px 0px #CBE3FF";
	const style = {
		container: (base) => ({
			...base,
			fontFamily: "Golos, Hevletica, sans-serif",
			fontSize: 16,
		}),
		placeholder: (base) => ({
			...base,
			color: "#808080"
		}),
		option: (base, state) => ({
			...base,
			borderRadius: 0,
			paddingLeft: 44,
			cursor: "pointer",
			":hover": {
				backgroundColor: "#0D6EFD",
				color: "#FFFFFF"
			},
			":active": {
				backgroundColor: state.isSelected ? "#0D6EFD" : 0
			}
		}),
		control: (base, state) => ({
			...base,
			borderRadius: 8,
			height: 40,
			borderColor: state.isFocused ? "#80ADFF" : "#E8EAED",
			boxShadow: state.isFocused ? boxShadowInFocus : 0,
			transition: "all .3s ease",
			":hover": {
				borderColor: "#80ADFF"
			}
		}),
		menu: base => ({
			...base,
			borderRadius: 8,
			paddingTop: 8,
			paddingBottom: 8,
		}),
		menuList: (base) => ({
			...base,
			padding: 0,
			backgroundColor: "white"
		}),
		indicatorSeparator: (base) => ({
			...base,
			display: "none"
		}),
		dropdownIndicator: (base, state) => ({
			...base,
			transition: "all .3s ease",
			transform: state.isFocused ? "rotate(180deg)" : null
		})
	};

	return (
		<form action="/" method="get" className="search-form w-100">
			<div className="search-form__search">
				<SearchInput/>
			</div>
			<div className="search-form__select-wrap flex just-between">
				<div className="search-form__select">
					<Select
						name={"search"}
						options={learning}
						isClearable
						placeholder={"Образование"}
						className="react-select-container"
						classNamePrefix="react-select"
						noOptionsMessage={() => "Нет совпадений"}
						styles={style}
					/>
				</div>
				<div className="search-form__select">
					<Select
						options={subject}
						isClearable
						placeholder={"Субъект РФ"}
						className="react-select-container"
						classNamePrefix="react-select"
					/>
				</div>
				<div className="search-form__select">
					<Select
						options={organization}
						isClearable
						placeholder={"Образовательная организация"}
						className="react-select-container"
						classNamePrefix="react-select"
					/>
				</div>
			</div>
		</form>
	);
};

export default SearchForm;