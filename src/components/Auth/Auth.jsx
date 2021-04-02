import React from "react";
import "./Auth.scss";
import AuthRadio from "./AuthRadio/AuthRadio";

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
			<form
				action="/"
				method="get"
				className="flex flex-col align-start auth"
			>
				<h1 className="title">Регистрация</h1>
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
			</form>
		);
	}
}
