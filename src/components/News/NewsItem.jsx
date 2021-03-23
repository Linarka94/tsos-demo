import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const NewsItem = (props) => {
	const {id, title, publication, src, subject} = props.data;
	const style = "news__list-item flex just-between align-start";
	const styleWithoutImg = "news__list-item flex just-between align-start border";

	return (
		<li className={src ? style : styleWithoutImg}>
			<Link to={`/news/${id}`} className="flex flex-col link">
				<span className="news__list-item-title">{title}</span>
				<span className="news__list-item-date">
					{publication ? publication : subject}
				</span>
			</Link>
			<div className="news__list-item-img">
				{src ? (
					<img src={src} alt=""/>
				) : ""}
			</div>
		</li>
	);
};

NewsItem.propTypes = {
	data: PropTypes.object,
	title: PropTypes.string,
	publication: PropTypes.string,
	src: PropTypes.string,
	subject: PropTypes.string,
};

export default NewsItem;
