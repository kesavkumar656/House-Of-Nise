// MODULES //
import Image from "next/image";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeExploreRich.module.scss";

// IMAGES //
import Collection from "@/../public/img/HomeExploreRich/Collection.png";
// DATA //

/** HomeExploreRich Section */
export default function HomeExploreRich() {
	return (
		<section className={`${styles.HomeExploreRich} `}>
			<div className="">
				<div className={styles.wrapper}>
					<div className={`${styles.textDiv} section_spacing `}>
						<div className={`${styles.heading}  text_2xl font_primary`}>
							Explore a rich assortment of stories
						</div>
						<p>
							Dive into a treasure trove of fragrances, inspired by explorative
							journeys – out in the world and within. Through Dutch perfumery at its
							finest, in a curated collection.
						</p>
					</div>
					<div className={`${styles.imageDiv} `}>
						<Image src={Collection} alt=""></Image>
					</div>
				</div>
			</div>
		</section>
	);
}
