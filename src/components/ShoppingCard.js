// MODULES //
import Image from "next/image";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/ShoppingCard.module.scss";
import Button from "./Buttons/Button";

// IMAGES //

// DATA //

/** ShoppingCard Component */
export default function ShoppingCard({ image, product, price }) {
	return (
		<div className={`${styles.Wrapper}`}>
			<div className={styles.ImageDiv}>
				<Image src={image} alt=""></Image>
			</div>
			<div className={styles.ProductDetail}>
				<p className="text_center text_500 text_reg font_primary">{product}</p>
				<p className="text_center text_500 text_reg font_primary">{price}</p>
			</div>
			<div className={`${styles.button}`}>
				<Button
					className={styles.btn}
					color="black"
					variant="filled"
					shape="square"
				>
					Buy Now
				</Button>
			</div>
		</div>
	);
}
