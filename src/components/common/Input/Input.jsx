import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import "./Input.scss";

const Input = ({id, className, label, error, ...attrs}) => {
	const classes = cx(
		"input",
		className,
		{error},
	);

	return (
		<div className="input__wrapper">
			<div className="label__wrapper">
				{label
					&& <label className="input__label" htmlFor={id}>{label}</label>
				}
				{attrs.required
					&& <span className="input__required">Required</span>
				}
			</div>
			<input
				name={id}
				id={id}
				className={classes}
				{...attrs}
			/>
			{error
				&& <span className="input__error">{error}</span>
			}
		</div>
	);
};

Input.propTypes = {
	id: PropTypes.string.isRequired,
	className: PropTypes.string,
	label: PropTypes.string,
	error: PropTypes.string,
};

Input.defaultProps = {
	className: "",
	label: "",
	error: ""
};

export default Input;
