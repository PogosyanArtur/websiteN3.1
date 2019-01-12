import React, {Component} from 'react'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import("../components/Map"), {
  loading: () => '',
  ssr: true
})

import Layout from '../layout'
import Banner from '../components/Banner'
import Products from '../components/Products'
import AboutUs from '../components/AboutUs'
import Achievement from '../components/Achievement'
import Navigation  from '../components/Navigation'
import TopLine from '../components/TopLine'
import Title from "../components/Title"



class index extends Component {

  render(){
    return (
      <Layout>
        <TopLine />
        <Navigation />
        <Banner/>
        <Title>продукты</Title>
        <Products />
        <AboutUs/>
        <Achievement />
        <Title>контакты</Title>
        <Map/>
      </Layout>
    )
  }
}
export default index
