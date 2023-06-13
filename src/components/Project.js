import React, { useState } from 'react'
import noteTaker from './assets/note-taker.png';
import socialNetworkApi from './assets/social-network-api.png';
import eCommerceBackend from './assets/e-commerce-backend.png';
import gettingWildRescue from './assets/getting-wild-rescue.png'; 
import codeQuiz from './assets/code-quiz.png';
import FNF from './assets/FNF.jpeg';
// import Card from './card';

export default function Project() {
    const [project, setProject] = useState([
        {
            id: 0,
            repo: 'https://github.com/erikolvera/note-taker',
            name: 'Note Taker',
            description: 'This application is a back end application that connects to a front end to create notes. The app uses express and uuid. Uuid is used to create unique IDs for each note that is created and added!',
            image: noteTaker,
        },
        {
            id: 1,
            repo: 'https://github.com/Bentto90/fitness-app',
            name: 'Fit, Not Fat',
            description: 'This is a fitness app that allows users to create a workout plan and track their progress. The user can create a workout plan and add exercises to it. The user can also view their progress on a dashboard. The user can also view their last workout and add exercises to it.',
            image: FNF,
        },
        {
            id: 2,
            repo: 'https://github.com/erikolvera/social-network-api',
            name: 'Social Network API',
            description: 'This repo is an API designed for a social media app. Using the database, it can keep track of friends, your posts, see who reacted to your post and more',
            image: socialNetworkApi,
        },
        {
            id: 3,
            repo: 'https://github.com/erikolvera/E-commerce-Back-End',
            name: 'E Commerce Backend',
            description: 'This application is a back end application that creates a database using Express.js and seqeulize to communicate with our MySQL databse.',
            image: eCommerceBackend,
        },
        {
            id: 4,
            repo: 'https://github.com/erikolvera/code-quiz',
            name: 'Code Quiz',
            description: 'Test your knowledge on basic javascript! It is a short little quiz.',
            image: codeQuiz,
        },
        {
            id: 5,
            repo: 'https://github.com/erikolvera/getting-wild-rescue',
            name: 'Getting Wild Resuce',
            description: 'This was my first project with a team and although it may not be the prettiest, it was a great learning experience. It is a website that would show cats and dogs that are up for adoption in your area using an API.',
            image: gettingWildRescue,
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
