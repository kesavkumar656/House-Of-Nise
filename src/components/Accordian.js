// MODULES //
import React, { useState } from "react";

// COMPONENTS //
import Image from "next/image";

// STYLES //
import styles from "@/styles/components/Accordian.module.scss";

// IMAGES //
import ArrowIcon from "@/../public/img/icons/acc_arrow.svg";

/** Accordion */
const Accordion = ({ children }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	/** Handle active accordion */
	const handleAccordionToggle = (index) => {
		setActiveIndex(activeIndex === index ? null : index); // Toggle active item
	};

	return (
		<div className={styles.accordion}>
			{React.Children.map(children, (child, index) =>
				React.cloneElement(child, {
					isOpen: activeIndex === index,
					onToggle: () => handleAccordionToggle(index),
				})
			)}
		</div>
	);
};

/** Accordion Item */
const AccordionItem = ({ children, isOpen, onToggle }) => {
	return (
		<div
			className={`accordion_wrap ${styles.accordion_wrap} ${
				isOpen ? styles.active : ""
			}`}
		>
			{React.Children.map(children, (child) => {
				if (child.type === AccordionTitle) {
					return React.cloneElement(child, { isOpen, toggleAccordion: onToggle });
				}
				if (child.type === AccordionContent && isOpen) {
					return child;
				}
				return null;
			})}
		</div>
	);
};

/** Accordion Title */
const AccordionTitle = ({ children, toggleAccordion, isOpen }) => {
	return (
		<button
			className={`${styles.accordion_title_wrap} `}
			onClick={toggleAccordion}
			aria-expanded={isOpen}
		>
			{children}
			<div className={styles.arrow_icon}>
				<Image src={ArrowIcon} width={30} height={27} alt="Accordion Arrow" />
			</div>
		</button>
	);
};

/** Accordion Content */
const AccordionContent = ({ children }) => {
	return <div className={styles.accordion_content_wrap}>{children}</div>;
};

export { Accordion, AccordionItem, AccordionTitle, AccordionContent };
