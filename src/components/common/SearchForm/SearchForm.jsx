import React from "react";
import SearchInput from "../SearchInput/SearchInput";

import "./SearchForm.scss";
import MySelect from "../MySelect/MySelect";
import PropTypes from "prop-types";


const SearchForm = (props) => {

	const {options, placeholders} = props;

	return (
		<form action="/" method="get" className="search-form w-100">
			<div className="search-form__search">
				<SearchInput/>
			</div>
			<div className="search-form__select-wrap flex just-between">
				{Object.entries(options).map((item, i) => (
					<div className="search-form__select" key={i}>
						<MySelect
							name={item[0]}
							options={item[1]}
							placeholder={placeholders[i]}
						/>
					</div>
				))
				}
			</div>
		</form>
	);
};

export default SearchForm;

SearchForm.propTypes = {
	options: PropTypes.object,
	placeholders: PropTypes.array
};
