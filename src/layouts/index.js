import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import './index.css'
import cmarcos from './cmarcos-signature.jpg'

console.log("cmarcos: ", cmarcos);

const Header = () => (
    <div className="header container">
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/"><img className="img-responsive" src={cmarcos} alt=""/></a>
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
            <p className="float-left"><a href="mailto:info@carmen-marcos.art?subject=Carmen%20Marcos%20Art">info@carmen-marcos.art</a></p>
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
