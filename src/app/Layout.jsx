import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import HeaderStyle from './layout/HeaderStyle'
import Content from './layout/Content'
import Header from './layout/Header';
import Footer from './layout/Footer'
import Router from './layout/Router'

const Layout = ({ children }) => (
  <HeaderStyle>
    <Helmet
      title="Rasmivan Blog"
      meta={[
        { name: 'description', content: 'Rasmivan Ilangovna\'s personal wedsite, portfolio, blog, and just cool $tuff' },
        { name: 'keywords', content: 'resume, blog, porfolio, tutorials, rasmi' },
      ]}
      script={[
        { 'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'},
      ]}
      link={[
        {'rel':'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
      ]}
    />
   <Header/>
    <Content>
    <Router />
    </Content>
    <Footer />
  </HeaderStyle>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout