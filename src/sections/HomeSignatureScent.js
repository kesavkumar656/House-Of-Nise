// MODULES //
import Image from "next/image";
// COMPONENTS //
import Button from "../components/Buttons/Button";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeSignatureScent.module.scss";

// IMAGES //
import Flowers from "@/../public/img/HomeSignatureScent/Flowers.png";
import Marquee from "react-fast-marquee";

// DATA //

/** HomeSignatureScent Section */
export default function HomeSignatureScent() {
	return (
		<section className={`${styles.HomeSignatureScent} section_spacing`}>
			<div className="container">
				<div className={styles.wrapper}>
					<div className={`${styles.textDiv} col-xs-12`}>
						<h1 className="text_2xl font_primary text_400">
							Discover your signature scent
						</h1>
						<p className="font_secondary text_reg">
							Every fragrance tells its own story; discover the scent that captures
							yours.
						</p>
						<Button
							className="color_white"
							shape="squared"
							color="primary"
							variant="filled"
						>
							Get my match
						</Button>
					</div>
					<div className={`${styles.ImageDiv} col-xs-12`}>
						<Image src={Flowers} alt=""></Image>
					</div>
				</div>
			</div>
			<Marquee>
				<div className={styles.wrapper}></div>
			</Marquee>
		</section>
	);
}
