import React from 'react'
import {Link}  from "react-router-dom"
const Footer = () => {
  return (
    <footer class="fixed-footer">
            <div class="container">
              <p>
                Copyright © 2022 {"   "}
                <Link to="/" target="_blank">
                  MobicashAgentApp
                </Link>   
              </p>
            </div>
    </footer>
  )
}

export default Footer