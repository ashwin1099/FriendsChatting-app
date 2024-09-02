import React from 'react'
import './detail.css'
import { auth } from '../../lib/firebase'

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Priya S</h2>
        <p>Lorem ipsum dolor sit amet </p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
          
        </div>
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
          
        </div>
        
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
          
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://img.freepik.com/free-photo/beautiful-couple-spend-time-summer-city_1157-20368.jpg?t=st=1725170740~exp=1725174340~hmac=1f5f4e19cb9715d894942081422e0639ede1a04aebd9482e4411c8d303193ad0&w=996" alt="" />
              <span>photo_2024_2.png</span>
              </div>
            <img src="./download.png" alt="" className='icon' />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://img.freepik.com/free-photo/beautiful-couple-spend-time-summer-city_1157-20368.jpg?t=st=1725170740~exp=1725174340~hmac=1f5f4e19cb9715d894942081422e0639ede1a04aebd9482e4411c8d303193ad0&w=996" alt="" />
              <span>photo_2024_2.png</span>
              </div>
            <img src="./download.png" alt="" className='icon' />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
          
        </div>
        <button>Block User</button>
        <button className='logout' onClick={() => auth.signOut()}>Logout</button>
      </div>
    </div>
  )
}

export default Detail