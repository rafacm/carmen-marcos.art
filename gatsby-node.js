const path = require(`path`)

exports.onCreateNode = ({ node }) => {
    console.log(`onCreateNode:`, node.internal.type);
}

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators

    return new Promise((resolve, reject) => {
        const workDetailPageTemplate = path.resolve(`./src/templates/work-detail.js`);
        resolve(
            graphql(
                `
query getAllFeaturedWorks {
  allWorks {
    edges {
      work: node {
        id
        slug
        title
        image {
          id
          url
          height
          width
        }
      }
    }
  }
}
    `
            ).then(result => {
                if (result.errors) {
                    reject(result.errors)
                }

                const works = result.data.allWorks.edges;
                console.log("works: ", works);
                works.forEach(( node ) => {
                    console.log("createPages node: ", node);
                    const path = "works/" + node.work.slug;
                    console.log("createPages path: ", path);
                    createPage({
                        path,
                        component: workDetailPageTemplate,
                        // If you have a layout component at src/layouts/blog-layout.js
                        //layout: `blog-layout`,
                        // In your blog post template's graphql query, you can use path
                        // as a GraphQL variable to query for data from the markdown file.
                        context: {
                            slug: node.work.slug
                        }
                    })
                })
            })
        )
    })
}