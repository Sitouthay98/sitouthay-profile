import React from 'react';
import './AppHeader.css'

const Header = () => {

  return (
    <header className="App-header">
        <div className='head-background'>
          <span><img src='/images/coding-gif.gif' alt='loading' /></span>
        </div>
        <div className='profile'>
          <span className='avatar-circle'>
              <img src='/images/image-profile.jpg' alt='Sitouthay' />
          </span>
        </div>
        <div className='header-contents'>
          <span className='my-name'>
            Sitouthay Xayalat (Jackie) 
          </span>

          <div className='objective'>
            <span>Bring idea to life with code</span><br/>
            <span>IT Support Specialist. React Web Devoloper</span>
          </div>     
        
          <span className='my-info'>
            <span className='my-info-span1'>
              <span>@-</span>
              <span>Sitouthay98</span>
            </span>
            <span className='my-info-span2'>
              <span>@-</span>
              <span>August 20th </span>
            </span>
            <span className='my-info-span3'>
              <span>@-</span>
              <span>(+856) 20 9643 4131 </span>
            </span>
            <span className='my-info-span4'>
              <span>@-</span>
              <span>Pakse, Champasak, Laos</span>
            </span>
          </span>
        </div>
    </header>
  );
};

export default Header;