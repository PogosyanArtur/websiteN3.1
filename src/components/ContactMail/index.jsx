import React from 'react'
import ContactItem from '../ContactItem'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const index = (props) => {
  return (
    <ContactItem 
      label={'pog0290@gmail.com'} 
      href="mailto:pog0290@gmail.com"
      icon={faEnvelope}
      size='lg'
      />
  )
}

export default index
