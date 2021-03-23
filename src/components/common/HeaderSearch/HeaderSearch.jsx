import React from "react";
import {Modal} from "antd";

import "antd/lib/modal/style/index.css";
import "./HeaderSearch.scss";

import searchIcon from "../../../img/common/icon/search.svg";
import searchIconBlue from "../../../img/common/icon/search-bl.svg";
import SearchInput from "../SearchInput/SearchInput";
import Input from "../Input/Input";

export default class HeaderSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			placeholder: "Что будем искать?",
			size: "large",
		};

		this.showModal = this.showModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	showModal() {
		this.setState({
			visible: true,
		});
	}

	closeModal() {
		this.setState({
			visible: false
		});
	}

	render() {
		const {visible, placeholder, size} = this.state;

		return (
			<>
				<button
					type="button"
					className="header__search nav__link flex align-center"
					onClick={this.showModal}
				>
					<span className="header__search-icon">
						<img src={searchIcon}/>
					</span>
					<span className="header__search-icon header__search-icon--blue">
						<img src={searchIconBlue}/>
					</span>
					<span className="header__search-descr">Поиск</span>
				</button>
				<Modal
					style={{top: 80}}
					width={"100%"}
					visible={visible}
					onOk={this.closeModal}
					onCancel={this.closeModal}
					footer={null}
					closable={false}
					maskClosable
				>
					<SearchInput
						placeholder={placeholder}
						size={size}
					/>
					<Input
						id={"asd"}
						type={"text"}
						error={"No text"}
						label={"Please text"}
					/>
				</Modal>
				{/*<Drawer*/}
				{/*	placement={placement}*/}
				{/*	closable={false}*/}
				{/*	onClose={this.onClose}*/}
				{/*	visible={visible}*/}
				{/*	height={height} >*/}
				{/*	<SearchInput placeholder={placeholder} size={size}/>*/}
				{/*</Drawer>*/}
			</>

		);
	}

}