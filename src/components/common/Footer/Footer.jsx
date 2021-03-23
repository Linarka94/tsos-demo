import React from "react";
import gerb from "../../../img/footer/gerb.png";
import signLogo from "../../../img/footer/sign-logo.png";
import tsos from "../../../img/footer/tsos.png";

import "./Footer.scss";

export default class Footer extends React.Component {
	render() {
		return (
			<footer className="footer container flex flex-col">
				<div className="footer__item">
					<div className="flex align-start">
						<div className="footer__item-wide flex">
							<div className="flex flex-col align-start">
								<h4 className="footer__title">Педагогу</h4>
								<a href="" className="footer__link">Учебные занятия</a>
								<a href="" className="footer__link">Материалы</a>
								<a href="" className="footer__link">Тесты</a>
							</div>
							<div className="flex flex-col align-start">
								<h4 className="footer__title">Ученику</h4>
								<a href="" className="footer__link">Подготовка к экзаменам</a>
								<a href="" className="footer__link">Материалы</a>
							</div>
							<div className="flex flex-col align-start">
								<h4 className="footer__title">Родителю</h4>
								<a href="" className="footer__link">Подготовка к экзаменам</a>
								<a href="" className="footer__link">Материалы</a>
							</div>
						</div>
						<div className="flex flex-col align-start">
							<h4 className="footer__title">Круглосуточная служба поддержки</h4>
							<a href="tel:+74955395519" className="footer__link" title="Позвонить">+7 495 539-55-19</a>
							<a href="mailto:support@myschool.edu.ru" className="footer__link footer__link--mail" title="Написать сообщение">support@myschool.edu.ru</a>
							<div className="footer__social flex align-center">
								<a href="" className="footer__social-link">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M17 9.15229H13.5944V7.18031C13.5944 6.43974 14.1503 6.26709 14.5419 6.26709C14.9326 6.26709 16.9452 6.26709 16.9452 6.26709V3.01141L13.6353 3C9.96107 3 9.12491 5.42819 9.12491 6.98209V9.15229H7V12.5071H9.12491C9.12491 16.8125 9.12491 22 9.12491 22H13.5944C13.5944 22 13.5944 16.7613 13.5944 12.5071H16.6102L17 9.15229Z"
											fill="#1D1D1D"/>
									</svg>
								</a>
								<a href="" className="footer__social-link">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M21.0998 7.74C21.2298 7.32 21.0998 7 20.4798 7H18.4598C17.9398 7 17.7098 7.27 17.5798 7.57C17.5798 7.57 16.5498 10.08 15.0898 11.72C14.6098 12.19 14.3998 12.34 14.1398 12.34C14.0098 12.34 13.7998 12.19 13.7998 11.76V7.74C13.7998 7.23 13.6798 7 13.2498 7H10.0598C9.73976 7 9.54976 7.24 9.54976 7.47C9.54976 7.95 10.2998 8.07 10.3498 9.44V12.42C10.3498 13.08 10.2298 13.2 9.97976 13.2C9.29976 13.2 7.61976 10.67 6.62976 7.79C6.42976 7.23 6.23976 7 5.71976 7H3.68976C3.11976 7 2.99976 7.27 2.99976 7.57C2.99976 8.11 3.68976 10.77 6.19976 14.29C7.86976 16.7 10.2298 18 12.3798 18C13.6698 18 13.8298 17.71 13.8298 17.21V15.39C13.8298 14.82 13.9498 14.7 14.3598 14.7C14.6598 14.7 15.1698 14.85 16.3698 16C17.7498 17.38 17.9698 18 18.7498 18H20.7698C21.3498 18 21.6398 17.71 21.4798 17.14C21.2998 16.57 20.6398 15.74 19.7698 14.76C19.2998 14.21 18.5898 13.61 18.3698 13.3C18.0698 12.92 18.1598 12.75 18.3698 12.4C18.3698 12.4 20.8398 8.93 21.0998 7.74Z"
											fill="#1D1D1D"/>
									</svg>
								</a>
								<a href="" className="footer__social-link">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
											fill="#1D1D1D"/>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="footer__item-info flex align-start">
					<div className="footer__item-wide flex flex-col">
						<div className="footer__item-info--links flex align-center">
							<a href="" className="footer__link footer__link--logo">
								<img src={tsos} alt=""/>
								ЦОС
							</a>
							<a href="" className="footer__link">О проекте</a>
							<a href="" className="footer__link">Вопросы и ответы</a>
						</div>
						<div className="footer__item-text">
							Единый доступ к необходимым образовательным сервисам и цифровым учебным материалам для учеников, их
							родителей и учителей
						</div>
					</div>
					<div className="footer__logo flex align-start">
						<a href="" className="footer__logo-link flex flex-col just-center align-center">
							<img src={gerb} alt=""/>
							Министерство<br/>просвещения РФ
						</a>
						<a href="" className="footer__logo-link">
							<img src={signLogo} alt=""/>
						</a>
					</div>
				</div>
			</footer>
		);
	}
}