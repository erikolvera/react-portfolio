import React from 'react'

export default function Resume() {
    const handleDownloadResume = () => {
        const resumeUrl = 'https://docs.google.com/document/d/187mgMaa7vvbgEdujjWTBTsYyDb7k3ZQX/edit?usp=sharing&ouid=117379970176736274299&rtpof=true&sd=true';
        window.open(resumeUrl, '_blank')
    };
  return (
    <div className='resume'>
      <h1>Resume</h1>
      <p></p>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleDownloadResume}>Download my resume!</button>
    </div>
  )
}
