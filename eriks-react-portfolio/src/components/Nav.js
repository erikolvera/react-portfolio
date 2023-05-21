import React from 'react';

function Nav() {
  // const [page, setPage] = useState('About');

  // const renderPage = () => {
  //   switch (page) {
  //     case 'About':
  //       return <About />;
  //     case 'Project':
  //       return <Project />;
  //     case 'Contact':
  //       return <Contact />;
  //     case 'Resume':
  //       return <Resume />;
  //     default:
  //       return <About />;
  // }
  // };

  return (
<>
      <nav className="navBar">
        <div className="container px-4 mx-auto flex flex-row items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#home">Erik O.</a>
          </div>
          <div className={"lg:flex flex-grow items-center"}>
            <ul className="flex flex-row lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75" href="#about">
                  <i className="text-white opacity-75"></i>
                  <span className="ml-2">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75" href="#portfolio">
                  <i className="text-white opacity-75"></i>
                  <span className="ml-2">Portfolio</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#contact"
                >
                  <i className="text-xl leading-lg text-white opacity-75"></i><span className="ml-2">Contact</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#resume"
                >
                  <i className="text-white opacity-75"></i><span className="ml-2">Resume</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;