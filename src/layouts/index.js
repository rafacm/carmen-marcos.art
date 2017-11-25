import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
    <div className="header container-fluid">
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#"><img src="http://cmarcos.net/assets/images/cmarcos.jpg" alt="" class="img-responsive"/></a>
                </div>
            </div>
        </nav>
    </div>
)

const Footer = () => (
    <footer className="small">
        <div className="container">
            <br/>
            <div id="bottom-space"></div>
            <p className="float-right">© 2017 Carmen Marcos</p>
        </div>
    </footer>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Carmen Marcos Art"
      meta={[
        { name: 'description', content: 'Carmen Marcos Art' },
        { name: 'keywords', content: 'carmen, marcos, art, fine arts, visual artist' },
      ]}
    />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <Header />
        <div className="container">
          {children()}
        </div>
    <Footer/>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
