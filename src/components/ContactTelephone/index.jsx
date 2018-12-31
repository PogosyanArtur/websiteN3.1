import React from 'react'
import ContactItem from '../ContactItem'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const index = () => {
  return (
    <ContactItem 
      label={'+7 (968) 3 907 907'} 
      href="tel:+79683907907"
      icon={faPhone}
      size='lg'
      rotation={90}
      />
  )
}

export default index
