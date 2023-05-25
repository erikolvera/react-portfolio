import React, { useState } from 'react'
// import Card from './card';

export default function Project() {
    const [project, setProject] = useState([
        {
            id: 0,
            repo: 'https://github.com/erikolvera/note-taker',
            name: 'Note Taker',
            description: 'This is my first project',
            image: '/assets/note-taker.png',
            link: 'https://google.com',

        },
        {
            id: 1,
            repo: '',
            name: 'Team Profile Generator',
            description: 'This is my second project',
            image: '/assets/team-profile-generator.png',
            link: 'https://google.com',

        },
        {
            id: 2,
            repo: '',
            name: 'Social Network API',
            description: 'This is my third project',
            image: '/assets/social-network-api.png',
            link: 'https://google.com',

        },
        {
            id: 3,
            repo: '',
            name: 'E Commerce Backend',
            description: 'This is my fourth project',
            image: '/assets/e-commerce.png',
            link: 'https://google.com',

        },
        {
            id: 4,
            repo: '',
            name: 'Code Quiz',
            description: 'This is my fifth project',
            image: '/assets/code-quiz.png',
            link: 'https://google.com',

        },
        {
            id: 5,
            repo: '',
            name: 'Getting Wild Resuce',
            description: 'This is my sixth project',
            image: '/assets/getting-wild-rescue.png',
            link: 'https://google.com',

        }
    ]);
    return (
        <div className="h-screen grid-container">
            {project.map((item) => (
                <div className="grid-item" key={item.id}>
                    <img src={item.image} alt='placeholder' />

                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <a href={item.repo} rel="noreferrer" target='_blank'><p>Check me out!</p></a>
                </div>
            ))}
        </div>
    );

}
