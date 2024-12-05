// MODULES //

// COMPONENTS //
import Button from "../components/Buttons/Button";

// STYLES //
import styles from "@/styles/components/InnerBanner.module.scss";

// PLUGINS //

// IMAGES //
import DefaultBanner from "@/../public/img/banner/defaultDesktopBanner.jpg";
import DefaultBannerMob from "@/../public/img/banner/defaultMobileBanner.jpg";

// UTILS //

/** Inner Banner component */
function InnerBanner({
	desktopImage,
	bannerTitle,
	bannerDescription,
	mobileImage,
	color,
}) {
	return (
		<div className={`${styles.inner_banner_wrap} `}>
			<div className={`${styles.banner_image} next_image next_cover_image`}>
				{desktopImage && (
					<picture>
						<source srcSet={desktopImage.src} media="(min-width:767px)" />
						<img src={mobileImage.src} alt="Banner" />
					</picture>
				)}
			</div>

			<div className={`${styles.banner_content}`}>
				<div className="container">
					<h1
						className={`${styles.title} ${
							color ? color : "col-xs-6 color_white"
						} text_3xl font_primary `}
					>
						{bannerTitle}
					</h1>
					<p
						className={`${styles.description} ${
							color ? color : "color_white"
						} col-xs-10 text_reg font_secondary`}
					>
						{bannerDescription}
					</p>
					<Button variant="filled" color="primary">Our fragrances</Button>
				</div>
			</div>
		</div>
	);
}

export default InnerBanner;
