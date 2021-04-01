import React, {useState, useEffect, useRef} from "react";
import cx from "classnames";

import "./HeaderSearch.scss";

import searchIcon from "../../../img/common/icon/search.svg";
import searchIconBlue from "../../../img/common/icon/search-bl.svg";
import SearchInput from "../SearchInput/SearchInput";

const HeaderSearch = () => {
	const [visible, setVisible] = useState(false);

	const searchDiv = useRef();
	const overlayDiv = useRef((() => {
		const overlay = document.createElement("div");
		overlay.classList.add("overlay");

		return overlay;
	})());

	useEffect(() => {
		window.addEventListener("click", outsideClick);
	}, []);

	const outsideClick = (e) => {
		const target = e.target;

		if (!searchDiv.current.contains(target)) {
			setVisible(false);
			overlayDiv.current.remove();
			document.body.classList.remove("lock");
		}
	};

	return (
		<>
			<button
				type="button"
				className="header__search nav__link flex align-center"
				onClick={(e) => {
					e.stopPropagation();
					setVisible(true);
					document.body.prepend(overlayDiv.current);
					document.body.classList.add("lock");
				}}
			>
				<span className="header__search-icon">
					<img src={searchIcon}/>
				</span>
				<span className="header__search-icon header__search-icon--blue">
					<img src={searchIconBlue}/>
				</span>
				<span className="header__search-descr">Поиск</span>
			</button>
			<div
				ref={searchDiv}
				className={cx("header__search-modal", {"visible": visible})}
			>
				<SearchInput placeholder={"Что будем искать?"}/>
			</div>
		</>
	);
};

export default HeaderSearch;