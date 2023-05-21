import React, { useState} from 'react'
import Card from './card';

export default function Project() {
  const [project, setProject] = useState([
    {
        name: 'Project 1',
        description: 'This is my first project',
        link: 'https://google.com',

    },
    {
        name: 'Project 2',
        description: 'This is my second project',
        link: 'https://google.com',


    }
  ]);
    return (
        <>
        {project.map(project => {
           return (<Card name={project.name} description={project.description} link={project.link} github={project.github}/>)
})}
        </>
        )

}
