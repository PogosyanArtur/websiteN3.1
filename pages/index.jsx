import React from 'react'

import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../layout'), {
  loading: () => <p style={{fontSize:'50px', color:'red', textAlign:'center'}}>Art jan privet</p>,
  ssr: true
})
import Banner from '../src/components/Banner'
import Products from '../src/components/Products'
import AboutUs from '../src/components/AboutUs'


const index = () => {
  return (
    <Layout>
      <Banner/>
      <Products/>
      <AboutUs/>
    </Layout>
  )
}

export default index
