import React, { Component } from 'react'
import WidthScreen from '../WidthScreen'
import styles from './styles.module.scss'
import ContactTelephone from '../ContactTelephone'
import ContactMail from '../ContactMail'




export class TopLine extends Component {
	render() {
		const isMobile = this.props.screen.smDown

		return (
			<div className={styles.TopLine}>
				<div className={styles.Container}>
					<ContactTelephone/>
					{!isMobile && <ContactMail/>}
				</div>
			</div>
		)
	}
}

export default WidthScreen(TopLine)
