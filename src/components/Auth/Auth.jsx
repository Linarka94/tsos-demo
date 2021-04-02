import React from "react";
import "./Auth.scss";
import AuthRadio from "./AuthRadio/AuthRadio";
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";
import Alert from "../Alert/Alert";

export default class Auth extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: "parent"
		};

		this.onChange = this.onChange.bind(this);
	}

	onChange = (e) => {
		this.setState({
			selected: e.target.value
		});
	};

	render() {

		const {selected} = this.state;

		return (
			<div className="auth">
				<h1 className="title">Регистрация</h1>
				<form
					action="/"
					method="get"
					className="flex flex-col align-start auth__form"
				>
					<div className="auth__description">
						Для завершение регистрации укажите свою основную роль. Другие роли можно добавить после регистрации.
					</div>
					<div className="flex align-center just-between auth__input-wrap">
						<AuthRadio
							label={"Законный представитель"}
							id={"reg-z"}
							name={"role"}
							value={"parent"}
							extra={"Родитель, попечитель или опекун"}
							onChange={this.onChange}
							isChecked={selected === "parent"}
						/>
						<AuthRadio
							label={"Обучающийся"}
							id={"reg-p"}
							name={"role"}
							value={"student"}
							onChange={this.onChange}
							isChecked={selected === "student"}
						/>
					</div>
					<div className="auth__agree">
						<div className="auth__agree-input">
							<Input
								id={"agree"}
								label={"Я согласен"}
								type={"checkbox"}
							/>
						</div>
						<a href="" className="link">с условиями использования и политикой конфиденциальности</a>
					</div>
					<Button
						primary
						type="button"
						className="auth__button"
					>
						Зарегистрироваться
					</Button>
				</form>
				<div className="auth__error">
					<Alert error>
						Для завершения регистрации необходимо предоставить доступ к данным на портале Госуслуг (ЕСИА)
					</Alert>
					<div className="auth__description">
						Для предоставления согласия на передачу данных повторите процесс регистрации
					</div>
					<Button
						primary
						type="button"
					>
						Перейти на страницу Госуслуг
					</Button>
				</div>
			</div>
		);
	}
}
