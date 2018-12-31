import React from 'react'
import styles from './styles.module.scss'

const NavigationLink = (props) => {
    const {
        label,
        to,
        view,
        active
    } = props
    
    const viewStatus = view
        && styles[`Link_view_${view}`]

    const activeLinkState = active && styles.Link_active

    return (
            <a className={`${styles.Link} ${viewStatus} ${activeLinkState}`} to={to}>
               <span>{label}</span> 
            </a>
    )
}

NavigationLink.defaultProps = {
    to: '/'
}

export default NavigationLink
