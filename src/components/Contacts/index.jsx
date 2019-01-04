import React from 'react'
import Title from '../Title'
import NoSSR from 'react-no-ssr';

import Map from '../Map'

import styles from './styles.module.scss'

const Contacts = () => {
  return (
    <section id='contacts'>
        <Title>КОНТАКТЫ</Title>
        <NoSSR>
          <Map className={`${styles.Map}`}/>
        </NoSSR>
    </section>
  )
}

export default Contacts
