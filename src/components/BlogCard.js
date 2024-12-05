// MODULES //
import Image from "next/image";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/BlogCard.module.scss";

// IMAGES //
import Oud from "public/img/Component/Oud.jpg";
import Arrow from "public/img/icons/arrow-right.svg";

// DATA //

/** BlogCard Component */
export default function BlogCard({ date, heading }) {
	return (
		<div className={styles.BlogCard}>
			<Image src={Oud} alt=""></Image>

			<div className={styles.textDiv}>
				<p className="text_500 font_secondary text_xs ">{date}</p>
				<h1 className="text_500 font_primary text_reg ">{heading}</h1>
				<div
					className={`${styles.readMore} text_500  color_primary font_primary text_sm`}
				>
					<p>Read more</p> <Image width={50}  className={styles.arrow} src={Arrow}></Image>
				</div>
			</div>
		</div>
	);
}
