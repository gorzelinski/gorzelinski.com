import React from "react"

import { Card, P } from "../elements"
import Project from "./project"

const Projects = ({ data = { allMdx: { nodes: [] } } }) => {
  const projects = data.allMdx.nodes

  return projects.length === 0 ? (
    <Card as="div">
      <P $ui>Brak projektów do wyświetlenia</P>
    </Card>
  ) : (
    projects.map(project => (
      <Project data={project} key={project.fields.slug}></Project>
    ))
  )
}

export default Projects
