export default class GotService {
	constructor() {
		this._apiBase = "http://localhost:3000";
	}

	getData = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`);
		}

		return await res.json();
	};

	getDataWithHeaders = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);
		const resHeaders = await res.headers;

		const result = await res.json();

		return {"body": result, "headers": resHeaders};
	};

	getTabs = async () => {
		const res = await this.getData("/faq/");
		return res.map(this._transformTab);
	};

	getAnswer = async (id) => {
		const answer = await this.getData(`/faq-items/${id}`);
		return this._transformAnswer(answer);
	};

	getLinks = async () => {
		const links = await this.getData("/links/");
		return links.map(this._transformLinks);
	};

	getLink = async (id) => {
		const link = await this.getData(`/links/${id}`);
		return this._transformLinks(link);
	};

	getLinksItem = async (curPage, limitPage) => {
		const linksItem = await this.getDataWithHeaders(`/links-item?_page=${curPage}&_limit=${limitPage}`);
		return {
			body: linksItem.body.map(this._transformLinksItem),
			totalCount: linksItem.headers.get("X-Total-Count")
		};
	};

	getNews = async () => {
		const news = await this.getData("/news/");
		return news.map(this._transformNews);
	};

	getRegionNews = async () => {
		const news = await this.getData("/region-news/");
		return news.map(this._transformNews);
	};

	getNewsDetail = async (id) => {
		const news = await this.getData(`/news/${id}`);
		return this._transformNews(news);
	};

	_transformLinks = (link) => {
		return {
			title: this.isSet(link.title),
			color: this.isSet(link.color),
			id: this.isSet(link.id)
		};
	};

	_transformNews = (news) => {
		return {
			id: this.isSet(news.id),
			title: this.isSet(news.title),
			publication: news.publication,
			src: news.src,
			source: news.source,
			text: this.isSet(news.text),
			subject: this.isSet(news.subject),
			gallery: news.gallery
		};
	};

	_transformLinksItem = (linksItem) => {
		return {
			id: this.isSet(linksItem.id),
			title: this.isSet(linksItem.title),
			site: this.isSet(linksItem.site),
			description: this.isSet(linksItem.description),
			icon: this.isSet(linksItem.icon)
		};
	};

	_transformTab = (tab) => {
		return {
			id: this.isSet(tab.id),
			title: this.isSet(tab.title),
			items: this.isSet(tab.items)
		};
	};

	_transformAnswer = (answer) => {
		return {
			id: this.isSet(answer.id),
			q: this.isSet(answer.q),
			a: this.isSet(answer.a),
		};
	};

	isSet(data) {
		if (data) {
			return data;
		} else {
			return "no data";
		}
	}

	// _extractId = (item) => {
	// 	const idRegExp = /\/([0-9]*)$/;
	// 	return item.url.match(idRegExp)[1];
	// }
}