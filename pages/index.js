// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/Home.module.scss";
import InnerBanner from "../src/components/InnerBanner";
import HomeExploreRich from "../src/sections/HomeExploreRich";
import HomeHero from "../src/sections/HomeHero";

// IMAGES //
import desktopImage from "@/../public/img/banner/Inner-banner.jpg";
// DATA //

/** Home Page */
export default function HomePage() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Home"} Desc={"Home Desc"} OgImg={""} Url={"/"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={`${styles.HomePage} bg_primary`}>
				<InnerBanner
					desktopImage={desktopImage}
					bannerTitle={
						"Unveil your deepest emotions and align with your highest frequency"
					}
					bannerDescription={"Exclusive Extrait de Parfum fragrances"}
					mobileImage={desktopImage}
				></InnerBanner>
				<HomeHero></HomeHero>
				<HomeExploreRich></HomeExploreRich>
			</main>
			{/* Page Content ends here */}
			{/* Footer */}
			<Footer />
		</div>
	);
}
