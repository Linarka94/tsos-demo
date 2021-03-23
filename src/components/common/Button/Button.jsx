import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import "./Button.scss";

const Button = ({
	children, onClick, className, disabled, active, primary, secondary, small, ...attrs
}) => {
	const onClickAction = e => {
		if (disabled) {
			e.preventDefault();
		} else {
			return onClick(e);
		}
	};

	const classes = cx(
		"btn",
		className,
		{active},
		{primary},
		{secondary},
		{small}
	);

	const Tag = attrs.href ? "a" : "button";

	return (
		<Tag
			className={classes}
			disabled={disabled}
			onClick={onClickAction}
			{...attrs}
		>
			{children}
		</Tag>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	active: PropTypes.bool,
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
	small: PropTypes.bool,

};

Button.defaultProps = {
	children: "Default button",
	onClick: () => {
	},
	className: "",
	disabled: false,
	active: false,
	primary: false,
	secondary: false,
	small: false
};

export default Button;
