// src/App.js
import React from 'react';
import './App.css';
import AppHeader from './Components/AppHeader/AppHeader'
import Navbar from './Components/AppHeader/Navbar';
import MainContents from './Components/MainContents/MainContents';
import Project from './Components/MainContents/Project';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className='all-contents'>
          <AppHeader/>
          
          <MainContents title='My Portfolio Website'
                        DescText desc= 'desc1'/>

          <Project title='Project #1' 
                    DescText desc= 'desc1' 
                    btn='View Project'/>

          <Project title='Project #2'
                    DescText desc= 'desc1'
                    btn='View Project'/>
        </div>

        <Footer />
    </div>
  );
}

export default App;

