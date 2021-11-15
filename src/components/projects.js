import React from "react"

import { P, Tile } from "../elements"
import Project from "./project"

const Projects = ({ data = { allMdx: { nodes: [] } } }) => {
  const projects = data.allMdx.nodes

  return projects.length === 0 ? (
    <Tile>
      <P $ui>Brak projektów do wyświetlenia</P>
    </Tile>
  ) : (
    projects.map(project => (
      <Project data={project} key={project.fields.slug}></Project>
    ))
  )
}

export default Projects
