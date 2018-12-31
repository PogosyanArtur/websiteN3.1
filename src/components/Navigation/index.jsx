import React, { Component } from "react";
import CSSTransition from 'react-transition-group/CSSTransition';
import WidthScreen from '../WidthScreen'

import NavigationLinks from "../NavigationLinks";
import Logo from "../Logo";
import HamburgerIcon from "../HamburgerIcon";
import styles from "./styles.module.scss";

export class Navbar extends Component {
	state = {
		showNavigation:false,
		items: [
			{
				label: "главная",
				to: "/",
				active: true
			},
			{
				label: "продукты",
				to: "/",
				active: false
			},
			{
				label: "о нас",
				to: "/",
				active: false
			},
			{
				label: "контакты",
				to: "/",
				active: false
			},
		]
	}

	handleMenuBarToggle = () => {
		this.setState(prevState => ({ showNavigation: !prevState.showNavigation }));
	}
	closeNavigation = () => {
		this.setState({ showNavigation: false });
	}
	componentDidMount() {
		window.addEventListener("resize", this.closeNavigation);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.closeNavigation);            
	}

	render() {

		const isMobile = this.props.screen.mdDown
		const {showNavigation, items } = this.state;

		return (
			<div className={`${styles.Navbar}`}>
				<div className={`${styles.Container}`}>

					<div className={`${styles.LogoBox} `}>
						{!showNavigation && <Logo />}
					</div>

					{!isMobile && <NavigationLinks items={items} />}

				</div>

				{isMobile && <HamburgerIcon active={showNavigation} onClicked={this.handleMenuBarToggle} className={styles.Navbar__HamburgerIcon} />}

				<CSSTransition
					in={showNavigation}
					timeout={400}
					mountOnEnter
					unmountOnExit
					classNames={{
						enter: styles['FadeOut-enter'],
						enterActive: styles['FadeOut-enter-active'],
						exitActive: styles['FadeOut-exit-active'],
					}}>
					<div className={`${styles.Navbar__Backdrop}`}>
						<NavigationLinks
							items={items}
							view="murky"
							className={` ${styles.Navbar__Navigation} `} />
					</div>
				</CSSTransition>

			</div>
		);
	}
}

export default WidthScreen(Navbar);
