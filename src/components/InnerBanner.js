// MODULES //

// COMPONENTS //

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
						className={`${styles.title} ${color ? color : "color_white"} text_3xl`}
					>
						{bannerTitle}
					</h1>
					<p
						className={`${styles.description} ${
							color ? color : "color_white"
						} text_3xl`}
					>
						{bannerDescription}
					</p>
				</div>
			</div>
		</div>
	);
}

export default InnerBanner;
