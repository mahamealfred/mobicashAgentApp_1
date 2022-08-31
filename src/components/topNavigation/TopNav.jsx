import React from 'react'
import './topnav.css'

const TopNav = () => {
  return (
    <div>
      <div class="header-bg header-bg-1"></div>  
  <div class="fixed-top">
            <div class="appbar-area sticky-black">
              <div class="container">
                <div class="appbar-container">
                  <div class="appbar-item appbar-actions">
                    <div class="appbar-action-item">
                      <a href="#" class="back-page">
                        {" "}
                        <img src="images/img_144.png" alt="logo" className='avaterIcon'/>
                        {/* <i class="flaticon-left-arrow"></i> */}
                        <i>Mobicash Agent App</i>
                      </a>
                    </div>
                  </div>
                  <div class="appbar-item appbar-page-title mx-auto">
                    <h1></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>       
</div>
  )
}

export default TopNav