import React from "react";
import errorIcon from "../../img/common/alert/modal/icon/error-fill.svg";
import warningIcon from "../../img/common/alert/modal/icon/warning-fill.svg";
import infoIcon from "../../img/common/alert/modal/icon/info.svg";
import successIcon from "../../img/common/alert/modal/icon/success-fill.svg";
import cx from "classnames";
import PropTypes from "prop-types";
import "./Alert.scss";

const Alert = ({children, className, error, warning, success, info}) => {

	const classes = cx(
		"alert",
		className,
		{error},
		{warning},
		{info},
		{success}
	);

	return (
		<div className={classes}>
			{error
				&& <img src={errorIcon} alt=""/>
			}
			{warning
			&& <img src={warningIcon} alt=""/>
			}
			{info
			&& <img src={infoIcon} alt=""/>
			}
			{success
			&& <img src={successIcon} alt=""/>
			}
			{children}
		</div>
	);
};

Alert.propTypes = {
	className: PropTypes.string,
	error: PropTypes.bool,
	warning: PropTypes.bool,
	success: PropTypes.bool,
	info: PropTypes.bool,
	children: PropTypes.string,
};

Alert.defaultProps = {
	className: "",
	children: ""
};

export default Alert;