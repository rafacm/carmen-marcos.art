module.exports = {
  siteMetadata: {
    title: `Carmen Marcos`,
    siteUrl: 'http://carmen-marcos.art'
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      {
          resolve: `gatsby-source-graphcms`,
          options: {
              endpoint: `https://api.graphcms.com/simple/v1/carmenmarcosart`,
              token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MDI2MjA3OTMsImNsaWVudElkIjoiY2l2Z29zNmNqMDE5MjAxODRucDAxZGRkMiIsInByb2plY3RJZCI6ImNqNTlianpkMXVqcXYwMTc0NGhnMWUwN3giLCJwZXJtYW5lbnRBdXRoVG9rZW5JZCI6ImNqNmFsbWd1ajB6NnIwMTk2cTB1ZGt3bTUifQ.hbXYkRNlPRvSLYsp4gU28vloFRFa2ooqHfzuTi8BGpg`,
              query : `
                    query getAllFeaturedWorks { 
                        allWorks(filter: {
                        featured: true
                      }, orderBy: date_DESC) {
                        id 
                        title
                        slug
                        image { 
                          id
                          url
                          height
                          width
                          size
                          handle
                          fileName
                        }
                        medium
                        technique
                        year
                        date
                        height
                        width
                      }
                    }    
                    `
          }
      },
      {
          resolve: 'gatsby-plugin-google-analytics',
          options: {
              trackingId: 'UA-107959880-1'
          }
      }
  ]
}
