import React from 'react'
import './signup.css'

const signup = () => {
  return (
    <div className='main-container'>
      <div className='hearder-container' ></div>

      <div className="signup-title">
       <div className="red-box">
          <p className='title'>
            जानकारी दर्ज करे
          </p>
        </div>
      </div> 

      <div className="form-container">
        <form className='form-content'>
          <div className="name-container">
            <label htmlFor="fullname">Full Name</label>
            <label htmlFor="phonenumber">Phone Number</label>
            <label htmlFor="city">City</label>
            <label htmlFor="username">Username</label>
          </div>
          <div className="inpboxleft">
            <input type="text" name="" id="fullname" />
            <input type="text" name="" id="phonenumber" />
            <input type="text" name="" id="city" />
            <input type="text" name="" id="" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default signup