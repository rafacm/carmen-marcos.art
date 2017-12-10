import React from "react"
import Helmet from "react-helmet"
import * as PropTypes from "prop-types"
import Link from 'gatsby-link'

const propTypes = {
    data: PropTypes.object.isRequired,
}

class WorkDetailTemplate extends React.Component {
    render() {
        const work = this.props.data.works
        const medium = work.medium
        const technique = work.technique
        let workTechniqueAndMedium;
        if (medium == "PAPEL" && technique == "ACUARELA") {
            workTechniqueAndMedium = "Watercolor on paper";
        } else if (medium == "PAPEL" && technique == "CARBONCILLO,PINCEL") {
            workTechniqueAndMedium = "Carbon and pencil on paper";
        } else if (medium == "LIENZO" && technique == "OLEO") {
            workTechniqueAndMedium = "Oil on canvas";
        } else if (medium == "PAPEL" && technique == "OLEO") {
            workTechniqueAndMedium = "Oil on paper";
        } else if (medium == "LIENZO,MADERA" && technique == "OLEO") {
            workTechniqueAndMedium = "Oil on canvas and wood";
        } else if (medium == "PAPEL" && technique == "ACUARELA,TINTA") {
            workTechniqueAndMedium = "Watercolor and ink on paper";
        } else if (medium == "PAPEL" && technique == "TINTA,ACUARELA") {
            workTechniqueAndMedium = "Watercolor and ink on paper";
        } else if (medium == "PAPEL" && technique == "TINTA") {
            workTechniqueAndMedium = "Ink on paper";
        } else if (medium == "PAPEL" && technique == "CERA") {
            workTechniqueAndMedium = "Crayon on paper";
        } else if (medium == "PAPEL" && technique == "CERA,TINTA") {
            workTechniqueAndMedium = "Crayon and ink on paper";
        } else {
            workTechniqueAndMedium = technique + " " + medium;
        }
        return(
            <div className="work-detail col-xs-12 col-sm-12 col-md-12 col-lg-12" key={work.slug}>
                <Helmet title={`Carmen Marcos Art - ${work.title}`} />
                <img className="img-fluid rounded" src={ work.image.url }/>
                <p className="text-left" id={work.slug}><em>{work.title}</em>. { workTechniqueAndMedium }. {work.height} cm. x {work.width} cm. {work.year}.</p>
                <Link to="/">Back to homepage</Link>
            </div>
        )
    }
}

WorkDetailTemplate.propTypes = propTypes

export default WorkDetailTemplate

export const pageQuery = graphql`
    query getWorkDetailsBySlug($slug: String!) {
      works(slug: { eq: $slug }) {
        id
        slug
        title
        medium
        technique
        year
        date
        height
        width
        image {
          id
          url
          height
          width
          handle
        }
      }
    }
`