import React, { Component } from "react";
import CSSTransition from 'react-transition-group/CSSTransition';
import WidthScreen from '../WidthScreen'
import NoSSR from 'react-no-ssr';

import NavigationLinks from "../NavigationLinks";
import Logo from "../Logo";
import HamburgerIcon from "../HamburgerIcon";
import styles from "./styles.module.scss";


export class Navbar extends Component {
	state = {
		showNavigation: false,
		items: [
			{
				label: "главная",
				to: "home",
				active: true
			},
			{
				label: "продукты",
				to: "products",
				active: ''
			},
			{
				label: "о нас",
				to: "aboutUs",
				active: ''
			},
			{
				label: "контакты",
				to: "contacts",
				active: ''
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
		const { showNavigation, items } = this.state;

		return (
			<div className={`${styles.Navbar}`}>
				<div className={`${styles.Container}`}>
					<NoSSR>
						<div className={`${styles.LogoBox} `}>
							{!showNavigation && <Logo />}
						</div>
					</NoSSR>


					{!isMobile
						&& <NoSSR>
							<NavigationLinks items={items} handleSetActive={this.handleSetActive} />
						</NoSSR>
					}

				</div>

				{isMobile
					&& <HamburgerIcon active={showNavigation} onClicked={this.handleMenuBarToggle} className={styles.Navbar__HamburgerIcon} />}


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