// MODULES //
import Image from "next/image";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeExploreRich.module.scss";

// IMAGES //
import perfume1 from "@/../public/img/HomeExploreRich/perfume1.png";
import perfume2 from "@/../public/img/HomeExploreRich/perfume2.png";
import perfume3 from "@/../public/img/HomeExploreRich/perfume3.png";
// DATA //

/** HomeExploreRich Section */
export default function HomeExploreRich() {
	return (
		<section className={`${styles.HomeExploreRich} `}>
			<div className="">
				<div className={styles.wrapper}>
					<div className={`${styles.textDiv}  `}>
						<div className={`${styles.heading}  text_2xl font_primary text_400`}>
							Explore a rich assortment of stories
						</div>
						<p>
							Dive into a treasure trove of fragrances, inspired by explorative
							journeys – out in the world and within. Through Dutch perfumery at its
							finest, in a curated collection.
						</p>
					</div>
					<div className={`${styles.imageDiv} `}>
						<div className={`${styles.perfumeDiv} bg_primary`}>
							<Image src={perfume1} alt=""></Image>
							<h1 className="">Collection</h1>
						</div>
						<div className={`${styles.perfumeDiv} bg_secondary_tint`}>
							<Image src={perfume2} alt=""></Image>
							<h1 className="">Thoughtful gifting</h1>
						</div>
						<div className={`${styles.perfumeDiv} bg_secondary_light`}>
							<Image src={perfume3} alt=""></Image>
							<h1 className="">Discover More</h1>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
