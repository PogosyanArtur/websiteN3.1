import React from "react";

import styles from "./styles.module.scss";
import NavigationLink from "../NavigationLink";



const Links = props => {
	const { 
			view, 
			className, 
			style, 
			items 
		} = props;

	return (
		<div className={`${styles.NavigationLinks} ${className}`} style={style}>
			{items.map((item, index) => {
				return <NavigationLink label={item.label} active={item.active} to={item.to} key={index} view={view} />;
			})}
		</div>
	);
};

export default Links;
