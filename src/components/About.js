import React from 'react';
import headPicutre from '/assets/head-picture.jpeg';

export default function About() {
  return (
    <div className="flex justify-center items-center mt-16 md:mt-0 h-screen">
      <div className="flex flex-col md:flex-row">
        <div>
          <img className="image" src="./react-portfolio/assets/head-picture.jpeg" alt="Erik Olvera" />
        </div>
        <div className="mt-4 md:mt-0 md:ml-10">
          <h1 className="text-4xl font-bold">Hello, I am Erik!</h1>
          <p className="text-xl mt-4">
            I am a full-stack web developer with a passion for learning and continuously improving my skills. Currently, I am attending the University of California Irvine coding boot camp, and I'm excited to continue growing my skills and knowledge as a developer.
          </p>
        </div>
      </div>
    </div>
  );
}
