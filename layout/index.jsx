import React from 'react'
import Head from 'next/head'

import './style.scss'
import Navigation  from '../src/components/Navigation'
import TopLine from '../src/components/TopLine'

const Layout = (props) => {
    const {
        children
    } = props

    return (
        <React.Fragment>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Dancing+Script:700|PT+Sans:400,400i,700" rel="stylesheet"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <title>React App</title>
            </Head>
            <TopLine />
            <Navigation />
            {children}
        </React.Fragment>
    )
}

export default Layout
