import React from "react";
import Select from "react-select";
import "./MySelect.scss";
import PropTypes from "prop-types";

const MySelect = (props) => {
	const {options, name, placeholder} = props;

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
				backgroundColor: state.isSelected ? "#0D6EFD" : 0,
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
		valueContainer: (base) => ({
			...base,
			height: 40,
		}),
		indicatorSeparator: (base) => ({
			...base,
			display: "none"
		}),
		clearIndicator: (base) => ({
			...base,
			paddingRight: 0
		}),
		dropdownIndicator: (base) => ({
			...base,
			color: "#222222",
			transition: "all .3s ease",
		})
	};

	return (
		<Select
			name={name}
			options={options}
			isClearable
			placeholder={placeholder}
			className="react-select-container"
			classNamePrefix="react-select"
			noOptionsMessage={() => "Нет совпадений"}
			styles={style}
		/>
	);
};

export default MySelect;

MySelect.propTypes = {
	options: PropTypes.array,
	name: PropTypes.string,
	placeholder: PropTypes.string,
};
