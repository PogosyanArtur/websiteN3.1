import React from 'react'
import dynamic from 'next/dynamic'

import Title from '../../components/Title'

const Map = dynamic(() => import("../../components/Map"), {
    loading: () => '',
    ssr: true
})



const Contacts = () => {
    return (
        <section>
            <Title>контакты</Title>
            <Map />
        </section>
    )
}

export default Contacts
