import React from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import MyAcc from "../Acc/Acc";
import "react-tabs/style/react-tabs.scss";
import "./Tab.scss";
import GotService from "../../services/GotService";
import Button from "../Button/Button";

export default class MyTabs extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: false,
			title: null,
			id: null,
			tabs: [],
			tabIndex: 0
		};

		this.setTabIndex = this.setTabIndex.bind(this);
	}

	setTabIndex = (index) => {
		this.setState({
			tabIndex: index
		});
	};

	gotService = new GotService();

	componentDidMount() {
		this.gotService.getTabs().then((tabs) => {
			this.setState({
				error: false,
				tabs: tabs
			});
		});
	}

	render() {
		const {tabIndex} = this.state;
		return (
			<Tabs className="container faq__container faq__tabs" selectedIndex={tabIndex} onSelect={index => this.setTabIndex(index)}>
				<TabList>
					{this.state.tabs.map((item, i) => (
						<Tab key={i}>{item.title}</Tab>
					))}
				</TabList>
				{this.state.tabs.map((item, i) => (
					<TabPanel key={i}>
						{item.items.map((tabContent, j) => (
							<MyAcc key={j} data={tabContent} />
						))}
						<Button className="react-tabs__btn" type="button" primary>Показать еще</Button>
					</TabPanel>
				))}
			</Tabs>
		);
	}
}
