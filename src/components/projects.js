import React from "react"

import { Card, Small } from "../elements"
import Project from "./project"

const Projects = ({ data = { allMdx: { nodes: [] } } }) => {
  const projects = data.allMdx.nodes

  return projects.length === 0 ? (
    <Card $half as="div">
      <Small $top $bottom as="p">
        Brak projektów do wyświetlenia
      </Small>
    </Card>
  ) : (
    projects.map(project => (
      <Project data={project} key={project.fields.slug}></Project>
    ))
  )
}

export default Projects
