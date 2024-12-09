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
import mobileImage from "@/../public/img/banner/Mobilebanner.jpg";
import HomeMemoirOfExperiences from "../src/sections/HomeMemoirOfExperiences";
import HomeSignatureScent from "../src/sections/HomeSignatureScent";
import HomeFindAStore from "../src/sections/HomeFindAStore";
import HomeFeaturedBlogs from "../src/sections/HomeFeaturedBlogs";
import HomeGetInTouch from "../src/sections/HomeGetInTouch";
import HomeMostLoved from "../src/sections/HomeMostLoved";
// DATA //

/** Home Page */
export default function HomePage() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Home"} Desc={"Home Desc"} OgImg={""} Url={"/"} />

			{/* Header */}
			<Header />
			<InnerBanner
				desktopImage={desktopImage}
				bannerTitle={
					"Unveil your deepest emotions and align with your highest frequency"
				}
				bannerDescription={"Exclusive Extrait de Parfum fragrances"}
				mobileImage={mobileImage}
			></InnerBanner>
			{/* Page Content starts here */}
			<main className={`${styles.HomePage} `}>
				<HomeExploreRich />
				<HomeMemoirOfExperiences />
				<HomeMostLoved />
				<HomeSignatureScent />
				<HomeFindAStore />
				<HomeFeaturedBlogs />
				<HomeGetInTouch />
			</main>
			{/* Page Content ends here */}
			{/* Footer */}
			<Footer />
		</div>
	);
}
