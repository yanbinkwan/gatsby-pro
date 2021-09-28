import Nav from './NavBar'
import Footer from './Footer'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Nav />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
