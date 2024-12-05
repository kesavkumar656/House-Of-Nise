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
import HomeMemoirOfExperiences from "../src/sections/HomeMemoirOfExperiences";
import HomeSignatureScent from "../src/sections/HomeSignatureScent";
import HomeFindAStore from "../src/sections/HomeFindAStore";
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
				mobileImage={desktopImage}
			></InnerBanner>
			{/* Page Content starts here */}
			<main className={`${styles.HomePage} `}>
				<HomeExploreRich></HomeExploreRich>
				<HomeMemoirOfExperiences></HomeMemoirOfExperiences>
				<HomeSignatureScent></HomeSignatureScent>
				<HomeFindAStore></HomeFindAStore>
			</main>
			{/* Page Content ends here */}
			{/* Footer */}
			<Footer />
		</div>
	);
}
