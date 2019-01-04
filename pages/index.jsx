import React, {Component} from 'react'

import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../layout'), {
  loading: () => <p style={{fontSize:'50px', color:'red', textAlign:'center'}}>Art jan privet</p>,
  ssr: true
})
import Banner from '../src/components/Banner'
import Products from '../src/components/Products'
import AboutUs from '../src/components/AboutUs'
import Contacts from '../src/components/Contacts'
import Achievement from '../src/components/Achievement'


class index extends Component {

  render(){
    return (
      <Layout>
        <Banner/>
        <Products />
        <AboutUs/>
        <Achievement />
        <Contacts/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </Layout>
    )
  }
}
export default index
