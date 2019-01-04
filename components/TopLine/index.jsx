import React, { Component } from 'react'
import widthScreen from '../../hoc/widthScreen'
import styles from './styles.module.scss'
import ContactItem from '../ContactItem'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import contacts from '../../data/contacts'




export class TopLine extends Component {
	render() {
		const isMobile = this.props.screen.smDown

		return (
			<div className={styles.TopLine}>
				<div className={styles.Container}>
					<ContactItem
						label={contacts.tel1.name}
						href={contacts.tel1.href}
						icon={faPhone}
						size='lg'
						rotation={90}
					/>
					{!isMobile && <ContactItem
						label={contacts.mail1.name}
						href={contacts.mail1.href}
						icon={faEnvelope}
						size='lg'
					/>}
				</div>
			</div>
		)
	}
}

export default widthScreen(TopLine)
