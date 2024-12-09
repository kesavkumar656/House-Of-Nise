// MODULES //
import Image from "next/image";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/Footer.module.scss";

// IMAGES //
import fb from "@/../public/img/icons/social/fb.png";
import insta from "@/../public/img/icons/social/insta1.png";
import tiktok from "/img/icons/social/TikTok.png";
import madebyTing from "/img/icons/social/madebyTing.png";
import Logo from "@/../public/img/logo-White.png";
// DATA //

/** Footer Component */
export default function Footer() {
	// .
	return (
		<footer className={`${styles.main_footer} bg_black `}>
			<div className="container">
				<div className={styles.nav}>
					<div className={styles.logo}>
						<Image src={Logo} alt=""></Image>
					</div>
					<div
						className={`${styles.Links} text_xs text_400 font_primary col-xs-12 color_white`}
					>
						<a>Collections</a>
						<a>Gifting</a>
						<a>Discovery</a>
						<a>Find Your Scent</a>
						<a>World of Nise</a>
						<a>Contact</a>
					</div>
				</div>
				<div className={`${styles.footer_wrapper} `}>
					<div>
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
							className={styles.logo}
							width={36}
							height={36}
							src={tiktok}
							alt=""
						></Image>
					</div>
					<div>
						<Image src={madebyTing} alt=""></Image>
					</div>
				</div>
			</div>
		</footer>
	);
}
