import React, { Component } from 'react'
import Link from "gatsby-link"
import _ from "lodash"

class IndexPage extends Component {
    render() {
        const featuredWorks = this.props.data.works.edges

        console.log(`works: `, featuredWorks)
        console.log(`works JSON:` , JSON.stringify(featuredWorks, undefined, 2))

        let rows = _.chunk(featuredWorks, 4);
        console.log("rows: ", rows);
        _.map(rows, (row , rowNumber) => {
            console.log("index: ", rowNumber);
            console.log("row: ", row);
            _.map(row, (workItem, index) => {
                console.log("index: ", index);
                var work = workItem.work;
                console.log("work: ", work);
                console.log("work id: ", work.id);
                console.log("work.image:", work.image);
                console.log("work.image.url:", work.image.url);
            })
        })
        return (
            <div className="container album">
                    {
                        _.map(rows, (row , rowNumber) => (
                            <div className="row" key={rowNumber}>
                                {
                                    _.map(row, (work, index) => (
                                        <div className="col-xs-6 col-sm-3 text-center" key={index}>
                                            <img className="img-fluid rounded" src={ "https://media.graphcms.com/resize=width:300,h:300,fit:crop/" + work.work.image.handle }/>
                                        </div>
                                        )
                                    )
                                }
                            </div>
                            )
                        )
                    }
            </div>
        )
    }
}

export default IndexPage

export const pageQuery = graphql`
    query getAllFeaturedWorks {
      works: allWorks {
        edges {
          work: node {
            id
            title
            slug
            image {
              id
              url
              height
              width
              handle
              fileName
            }
          }
        }
      }
    }
`
