import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import logo from "../../../img/common/logo-header.png";
import userLogo from "../../../img/user.svg";
import "./Header.scss";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import cx from "classnames";

const Header = () => {

	const [visible, isVisible] = useState(false);

	return (
		<header className="header flex align-center">
			<div className="header__nav container flex just-between align-center">
				<div className="header__burger" id="burger">
					<span/>
				</div>
				<Link to="/" className="header__logo flex align-center">
					<img className="header__logo-img" src={logo} alt="Моя Школа"/>
				</Link>
				<nav className="nav flex just-between align-center">
					<NavLink to='/library' activeClassName="active" className="nav__link">Библиотека</NavLink>
					<NavLink to='/faq' activeClassName="active" className="nav__link">Вопросы-ответы</NavLink>
					<NavLink to='/news' activeClassName="active" className="nav__link">Новости</NavLink>
					<NavLink to='/links' activeClassName="active" className="nav__link">Полезные ссылки</NavLink>
				</nav>
				<div className="flex align-center">
					<HeaderSearch/>
					<Link to="/login" className="header__login nav__link">
						Вход/Регистрация
					</Link>
					<div className="flex align-center header__user-wrap">
						<a
							href="#"
							className="header__login nav__link header__user"
							onClick={(e) => {
								e.preventDefault();
								isVisible(!visible);
							}}
						>
							<img src={userLogo} alt="Пользователь"/>
							Ольга
						</a>
						<div
							className={cx("header__user-dropdown", {visible})}>
							<div className="header__user-info">
								Наталья Курчатова
								<span>Родитель</span>
							</div>
							<div className="header__user-links">
								<a href="">Личный кабинет</a>
								<span>Другие роли</span>
								<a href="/admin">Контент</a>
							</div>
							<a href="">Выйти</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
