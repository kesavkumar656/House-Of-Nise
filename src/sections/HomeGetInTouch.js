// MODULES //
import Image from "next/image";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeGetInTouch.module.scss";
import Button from "../components/Buttons/Button";

// IMAGES //
import buildingLeft from "@/../public/img/HomeGetInTouch/Buildings-left.png";
import buildingRight from "@/../public/img/HomeGetInTouch/Buildings-right.png";
// DATA //

/** HomeGetInTouch Section */
export default function HomeGetInTouch() {
	return (
		<section className={styles.HomeGetInTouch}>
			<div className="container">
				<div className={`${styles.wrapper}  `}>
					<h1 className="text_4xl font_primary">Get in touch</h1>
					<p className="col-xs1-8 text_center text_400">
						We welcome your inquiries and collaboration opportunities to elevate our
						fragrance journey together.
					</p>
					<Button variant="filled" shape="squared" color="primary">
						Lets connect
					</Button>
				</div>
			</div>
			<div className={styles.B_left}>
				<Image src={buildingLeft} alt=""></Image>
			</div>
			<div className={styles.B_right}>
				<Image src={buildingRight} alt=""></Image>
			</div>
		</section>
		// .
	);
}
