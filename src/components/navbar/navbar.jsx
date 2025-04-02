import React from 'react'
import './navbar.css'

const navbar = () => {
  return (
    <header classname="main">
        <div classname="header-containt">
            <div classname="logo">
                {/* <img src="" alt="#"> */}
            </div>
            <div classname="containt-link">
                <a href="#">
                    write
                </a>
                <a href="#">
                    read
                </a>
                <a href="#">
                    share
                </a>
                <a href="#">
                    other
                </a>
            </div>
            <div classnamename="containt-button">
                <button classname="butt">login</button>
            </div>
        </div>

    </header>
  )
}

export default navbar

    {/* <main classname="index-main">
        <div classname="index-content">
            <div classname="left-box">
                <img src="" alt="" />
            </div>
            <div classname="right-box">
                <h1>name of poem</h1>
                <p>poem</p>
            </div>

        </div>
    </main> */}