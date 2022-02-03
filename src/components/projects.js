import React from "react"

import { P, Tile } from "../elements"
import Project from "./project"

const Projects = ({ data = { nodes: [] } }) => {
  const projects = data.nodes

  return projects.length === 0 ? (
    <Tile>
      <P $ui>No projects to display</P>
    </Tile>
  ) : (
    projects.map(project => (
      <Project data={project} key={project.fields.slug}></Project>
    ))
  )
}

export default Projects
