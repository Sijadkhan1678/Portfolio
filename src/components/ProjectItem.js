import React from 'react'

export const ProjectItem = ({project}) => {

 const {title,link,github} = project
  return (
    <li>
        <a href={link} rel="noreferrer"   target="_blank">{title}</a>
        <a href={github} rel="noreferrer" target="_blank">Github</a>
    </li>
  )
}

export default ProjectItem
