// MODULES //
import Image from "next/image";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/Footer.module.scss";

// IMAGES //
import fb from "public/img/icons/social/fb.png";
import insta from "public/img/icons/social/insta1.png";
import tiktok from "public/img/icons/social/Tiktok.png";
import madebyTing from "public/img/icons/social/ting.png";
import Logo from "public/img/logo-White.svg";

// DATA //

/** Footer Component */
export default function Footer() {
	return (
		<footer className={`${styles.main_footer} bg_black `}>
			<div className="container">
				<div className={styles.nav}>
					<div className={styles.logo}>
						<Image src={Logo} alt=""></Image>
					</div>
					<div
						className={`${styles.Links} text_xs text_400 font_primary  color_white`}
					>
						<a href="">Collections</a>
						<a href="">Gifting</a>
						<a href="">Discovery</a>
						<a href="">Find Your Scent</a>
						<a href="">World of Nise</a>
						<a href="">Contact</a>
					</div>
				</div>
				<div className={`${styles.footer_wrapper} `}>
					<div className={styles.copyright}>
						<p className="color_white font_secondary text_sm text_400">
							Copyright © {new Date().getFullYear()} House of Nisé
						</p>
					</div>
					<div className={styles.social}>
						<Image
							className={styles.logo}
							width={36}
							height={36}
							src={fb}
							alt=""
						></Image>
						<Image
							className={styles.logo}
							width={36}
							height={36}
							src={insta}
							alt=""
						></Image>
						<Image
							className={`${styles.logo} `}
							width={36}
							height={36}
							src={tiktok}
							alt=""
						></Image>
					</div>

					<div className={styles.ting}>
						<Image src={madebyTing} alt=""></Image>
					</div>
				</div>
			</div>
		</footer>
	);
}
