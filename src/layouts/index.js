import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <div>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Carmen Marcos Art
        </Link>
      </h1>
    </div>
  </div>
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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <Header />
      <section className="section">
        <div className="container">
          {children()}
        </div>
      </section>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
