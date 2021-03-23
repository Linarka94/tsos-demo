import React from "react";
import PropTypes from "prop-types";
// import {Image} from "antd";
import {SRLWrapper} from "simple-react-lightbox";
// import "antd/lib/image/style/index.css";

const elements = [
	{
		src: "./img/news/new1.png",
		caption: "Lorem ipsum dolor sit amet",
		width: 1920,
		height: "auto"
	},
	{
		src: "https://my/second-image.jpg",
		thumbnail: "https://my/second-image-thumbnails.jpg",
		caption: "Commodo commodo dolore",
		width: 1024,
		height: "auto"
	},
	{
		src: "https://vimeo.com/458698330",
		thumbnail:
			"https://my/third-image-thumbnails.jpg",
		caption: "Vimeo video",
		autoplay: false,
		showControls: true
	}
];

function MyGallery() {
	return <SRLWrapper elements={elements} />;
}

export default MyGallery;

MyGallery.propTypes = {
	src: PropTypes.array
};
