import React from "react";
import cx from "classnames";
import "./AuthRadio.scss";
import PropTypes from "prop-types";

const AuthRadio = ({id, className, label, name, value, isChecked, error, onChange, ...attrs}) => {

	const classes = cx(
		"auth__input-label",
		className,
		{"checked": isChecked},
		{error},
	);

	return (
		<div className="auth__input flex flex-col">
			<label
				htmlFor={id}
				className={classes}
			>
				{error
				&& <span className="auth__input-error">{error}</span>
				}
				<span className="auth__input-icon"/>
				<span className="flex flex-col">
					{label}
					{attrs.extra
					&& <span className="auth__input-label--extra">
						{attrs.extra}
					</span>
					}</span>
				{attrs.required
				&& <span className="auth__input-required">Required</span>
				}
			</label>
			<input
				type="radio"
				name={name}
				id={id}
				value={value}
				defaultChecked={isChecked}
				onChange={onChange}
			/>
		</div>
	);
};

AuthRadio.propTypes = {
	id: PropTypes.string.isRequired,
	className: PropTypes.string,
	label: PropTypes.string,
	error: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	isChecked: PropTypes.bool,
	onChange: PropTypes.func
};

AuthRadio.defaultProps = {
	className: "",
	label: "",
	error: "",
	name: "",
};

export default AuthRadio;
