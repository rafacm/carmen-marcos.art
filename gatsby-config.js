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
              query : `{
                  allWorks(filter: { featured: true }, orderBy: updatedAt_DESC) {
                      id 
                      title
                      slug
                      updatedAt
                      featured
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
              }`
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
