import React from 'react'

export const ProjectItem = ({project}) => {

 const {title,link,github} = project
  return (
    <li>
        <a href={link} target="_blank">{title}</a>
        <a href={github} target="_blank">Github</a>
    </li>
  )
}

export default ProjectItem