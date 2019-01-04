import React, {Component} from 'react'

import NoSSR from 'react-no-ssr';
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../layout'), {
  loading: () => <p style={{fontSize:'50px', color:'red', textAlign:'center'}}>Art jan privet</p>,
  ssr: true
})
import Banner from '../components/Banner'
import Products from '../components/Products'
import AboutUs from '../components/AboutUs'
import Achievement from '../components/Achievement'
import Navigation  from '../components/Navigation'
import TopLine from '../components/TopLine'
import Title from "../components/Title"
import Map from "../components/Map"


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
        <NoSSR>
          <Map/>
        </NoSSR>
      </Layout>
    )
  }
}
export default index
