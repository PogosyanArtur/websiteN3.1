import React, {Component} from 'react'

import Layout from '../layout'
import Banner from '../views/Banner'
import Products from '../views/Products'
import AboutUs from '../views/AboutUs'
import Achievement from '../views/Achievement'
import Navigation  from '../views/Navigation'
import TopLine from '../views/TopLine'
import Contacts from '../views/Contacts'



class index extends Component {

  render(){
    return (
      <Layout>
        <TopLine />
        <Navigation />
        <Banner/>
        <Products />
        <AboutUs/>
        <Achievement />
        <Contacts/>
      </Layout>
    )
  }
}
export default index
