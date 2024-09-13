import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({Children}) => {
  return (
    <>
     <Header />
     <div>{Children}</div>
     <Footer />

     

    </>
  )
}

export default Layout
