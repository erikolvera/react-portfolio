import React, { useState } from 'react'
// import Card from './card';

export default function Project() {
    const [project, setProject] = useState([
        {
            id: 0,
            repo: 'https://github.com/erikolvera/note-taker',
            name: 'Note Taker',
            description: 'This application is a back end application that connects to a front end to create notes. The app uses express and uuid. Uuid is used to create unique IDs for each note that is created and added!',
            image: './react-portfolio/assets/note-taker.png',
        },
        {
            id: 1,
            repo: 'https://github.com/erikolvera/team-profile-generator',
            name: 'Team Profile Generator',
            description: 'Using this application, you can make a quick and easy html file to make your own employee team. You will be prompted a few questions, answer them, and the html page will create itself!',
            image: './react-portfolio/assets/team-profile-generator.png',
        },
        {
            id: 2,
            repo: 'https://github.com/erikolvera/social-network-api',
            name: 'Social Network API',
            description: 'This repo is an API designed for a social media app. Using the database, it can keep track of friends, your posts, see who reacted to your post and more',
            image: './react-portfolio/assets/social-network-api.png',
        },
        {
            id: 3,
            repo: 'https://github.com/erikolvera/E-commerce-Back-End',
            name: 'E Commerce Backend',
            description: 'This application is a back end application that creates a database using Express.js and seqeulize to communicate with our MySQL databse.',
            image: './react-portfolio/assets/e-commerce.png',
        },
        {
            id: 4,
            repo: 'https://github.com/erikolvera/code-quiz',
            name: 'Code Quiz',
            description: 'Test your knowledge on basic javascript! It is a short little quiz.',
            image: './react-portfolio/assets/code-quiz.png',
        },
        {
            id: 5,
            repo: 'https://github.com/erikolvera/getting-wild-rescue',
            name: 'Getting Wild Resuce',
            description: 'This was my first project with a team and although it may not be the prettiest, it was a great learning experience. It is a website that would show cats and dogs that are up for adoption in your area using an API.',
            image: './react-portfolio/assets/getting-wild-rescue.png',
        }
    ]);
    return (
        <div className=" grid-container">
            {project.map((item) => (
                <div className="grid-item" key={item.id}>
                    <img src={item.image} alt='project images' />

                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <a href={item.repo} rel="noreferrer" target='_blank'><p>Check out my repo!</p></a>
                </div>
            ))}
        </div>
    );

}
