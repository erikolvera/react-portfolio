import React from 'react';

export default function Footer() {
  return (
    <footer className="footer flex justify-center">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">This is a React website by Erik Olvera</h3>
        <div className="flex justify-center">
          <a className='text-white hover:opacity-75 no-underline'
            href='https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage&_ga=2.117226625.641575225.1684886981-1922934027.1678682940'
            rel="noreferrer"
            target="_blank">
            <h4 className="mr-4">Indeed</h4></a>
          <hr className="mr-20" />
          <a className='text-white hover:opacity-75 no-underline'
            href='https://github.com/erikolvera'
            rel="noreferrer"
            target="_blank">
            <h4>Github</h4></a>
        </div>
      </div>
    </footer>
  );
}
