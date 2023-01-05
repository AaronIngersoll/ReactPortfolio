import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PortfolioDetail = () => {
	const { slug } = useParams();
	const [portfolioItem, setPortfolioItem] = useState([]);
	const [bannerStyles, setBannerStyles] = useState({});
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const getPortfolioItem = async () => {
			await axios
				.get(
					`https://aaroning.devcamp.space/portfolio/portfolio_items/${slug}`,
					{
						withCredentials: true,
					}
				)
				.then((response) => {
					setPortfolioItem(response.data.portfolio_item);
				})
				.catch((error) => {
					console.log("getportfolioitem error", error);
				});
			setLoading(false);
		};
		getPortfolioItem();
		const { category, description, logo_url, name, thumb_image_url, url } =
			portfolioItem;
		setBannerStyles({
			backgroundImage: "url(" + portfolioItem.banner_image_url + ")",
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
		});
	}, []);

	const logoStyles = {
		width: "200px",
	};
	return (
		<div className="portfolio-detail-wrapper">
			{loading && <div>Loading</div>}
			{!loading && (
				<>
					<div className="banner" style={bannerStyles}>
						<img src={portfolioItem.logo_url} style={logoStyles} />
					</div>
					<div className="portfolio-detail-description-wrapper">
						<div className="description">{portfolioItem.description}</div>
					</div>
					<div className="bottom-content-wrapper">
						<a href={portfolioItem.url} className="site-link" target="_blank">
							Visit {portfolioItem.name}
						</a>
					</div>
				</>
			)}
		</div>
	);
};

export default PortfolioDetail;
