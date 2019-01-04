import React from 'react'
import Title from '../Title'
import Map from '../Map'

import styles from './styles.module.scss'

const Contacts = () => {
  return (
    <section id='contacts'>
        <Title>КОНТАКТЫ</Title>
        <Map className={`${styles.Map}`}/>     
    </section>
  )
}

export default Contacts
