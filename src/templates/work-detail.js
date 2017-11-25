import React from "react"

class WorkDetailTemplate extends React.Component {
    render() {
        const slug = this.props.data.workDetailsBySlug

        return (
            <div>
                <h1>Slug {slug}</h1>
            </div>
        )
    }
}

export default WorkDetailTemplate

