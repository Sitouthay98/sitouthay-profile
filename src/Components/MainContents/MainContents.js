import React, { useState, useEffect } from 'react';
import './MainContents.css';
import PageAbout from './Pages/PageAbout';
import PageExp from './Pages/PageExp';
import PageProject from './Pages/PageProject';
import PageContact from './Pages/PageContact';

function MainContents() {

  const [currentPage, setCurrentPage] = useState('content-about');

  function onEventOpenClick(event) {
    setCurrentPage(event.target.className);
  }

  useEffect(() => {
    // Refetch component when `currentPage` changes
    console.log('currentPage changed:', currentPage);
  }, [currentPage]);

  return (
    <div className="main-content">
      <nav className="nav-content">
        <li>
          <a className="content-about" onClick={onEventOpenClick}>About</a>
        </li>
        <li>
          <a className="content-experiences" onClick={onEventOpenClick}>Experiences</a>
        </li>
        <li>
          <a className="content-projects" onClick={onEventOpenClick}>Projects</a>
        </li>
       <li>
       <a className="content-contact" onClick={onEventOpenClick}>Contact</a>
       </li>
        
      </nav>
      <div className="detail-content">
        {currentPage === 'content-about' && <PageAbout />}
        {currentPage === 'content-experiences' && <PageExp />}
        {currentPage === 'content-projects' && <PageProject />}
        {currentPage === 'content-contact' && <PageContact />}
      </div>
    </div>
  );
}

export default MainContents;
