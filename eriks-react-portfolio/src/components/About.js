import React, { useState} from 'react'

export default function About() {
  const [page, setPage] = useState('About');
  if (page === 'About') {
<button onClick={() => setPage('Project')}>Hello!</button>
        return (
          <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <img className='image' src="assets/head-picture.jpeg" alt="Erik Olvera" />
          </div>
          <div style={{ flex: 1 }}>
            <h1 className='pt-10'>Hello I am Erik!</h1>
          <p className='pt-10 text-2xl'>
            I am full-stack web developer with a passion for learning and to continously imporove my skills. I'm currently in the University of California Irvine coding boot camp, 
            and I'm excited to continue to grow my skills and knowledge as a developer.
          </p>
          </div>
        </div>
  )
} else {
  return (<button onClick={() => setPage('About')}>Project!</button>)
  
}




  
}
