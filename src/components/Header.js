// MODULES //
import { useState } from "react";

// COMPONENTS //
import Image from "next/image";
import Link from "next/link";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/Header.module.scss";

// IMAGES //
import Arrow from "@/../public/img/icons/arrow.svg";
import Logo from "@/../public/img/logo.png";

import cart from "@/../public/img/header/shopping_cart.png";
import person from "@/../public/img/header/person.png";
import search from "@/../public/img/header/search.png";
// DATA //

/** Header Component */
export default function Header() {
	const [openSidebar, setOpenSidebar] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);

	/** Open sidebar on click of hamburger */
	const toggleSidebar = () => {
		setOpenSidebar(!openSidebar);
	};

	/** Function to toggle dropdown */
	const toggleDropdown = (dropdownKey) => {
		setOpenDropdown((prevOpenDropdown) =>
			prevOpenDropdown === dropdownKey ? null : dropdownKey
		);
	};

	return (
		<div
			className={`${styles.main_header} ${
				openSidebar ? styles.sidebar_opened : ""
			}`}
		>
			<div className="container">
				<div className={`${styles.header_inside}`}>
					{/* Logo wrap */}
					<Link href="/">
						<div className={styles.image_wrap}>
							<Image src={Logo} alt="Logo" />
						</div>
					</Link>

					{/* Links Wrap */}
					<div className={`${styles.links_wrap} text_sm font_primary text_400`}>
						{/* Add "has_dropdown" class if your link has dropdown */}
						<div
							className={`${styles.links} ${styles.has_dropdown} ${
								openDropdown === "aboutUs" ? styles.dropdown_opened : ""
							} dropdown text_sm font_primary text_400`}
							onClick={() => toggleDropdown("aboutUs")}
						>
							<div className={styles.link_title}>
								<p>Collections</p>
								<span className={styles.arrow_img}>
									<Image src={Arrow} alt="Arrow" />
								</span>
							</div>
							{/* Dropdown is opened when link is clicked */}
							<div className={`${styles.dropdown_wrap}`}>
								<Link href="">
									<p className={styles.dropdown_links}>Collections 1</p>
								</Link>
								<Link href="">
									<p className={styles.dropdown_links}>Collections 2</p>
								</Link>
							</div>
						</div>
						<div
							className={`${styles.links} ${styles.has_dropdown} ${
								openDropdown === "blogs" ? styles.dropdown_opened : ""
							} dropdown text_sm font_primary text_400`}
							onClick={() => toggleDropdown("blogs")}
						>
							<div className={styles.link_title}>
								<p>Gifting</p>
								<span className={styles.arrow_img}>
									<Image src={Arrow} alt="Arrow" />
								</span>
							</div>
							{/* Dropdown is opened when link is clicked */}
							<div className={`${styles.dropdown_wrap}`}>
								<Link href="">
									<p className={styles.dropdown_links}>Gifting 1</p>
								</Link>
								<Link href="">
									<p className={styles.dropdown_links}>Gifting 2</p>
								</Link>
								<Link href="">
									<p className={styles.dropdown_links}>Gifting 3</p>
								</Link>
							</div>
						</div>
						<div className={styles.links}>
							<Link href="">
								<div className={styles.link_title}>Discovery</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="">
								<div className={styles.link_title}>Find Your Scent</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="">
								<div className={styles.link_title}>World of Nise</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="">
								<div className={styles.link_title}>Contact Us</div>
							</Link>
						</div>
					</div>
					<div className={styles.DashboardMobile}>
						<div className={`${styles.DashboardMenu} `}>
							<div className={styles.search}>
								<Image src={search} alt="" className={styles.search}></Image>
							</div>
							<div className={styles.profile}>
								<Image src={person} alt="" className={styles.profile}></Image>
							</div>
							<div className={styles.cart}>
								<Image src={cart} alt="" className={styles.cart}></Image>
							</div>
						</div>
						{/* Hamburger icon visible in mobile only */}
						<div className={styles.hamburger_icon} onClick={toggleSidebar}>
							<span className={styles.hamburger_line}></span>
							<span className={styles.hamburger_line}></span>
							<span className={styles.hamburger_line}></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
