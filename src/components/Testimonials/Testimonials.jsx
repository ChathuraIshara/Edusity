import React from 'react'
import { useRef } from 'react';
import nexticon  from '../../assets/next-icon.png';
import backicon from '../../assets/back-icon.png';
import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';
import './Testimonials.css';

function Testimonials() {
  const slider=useRef();
  let tx=0;
  const slideForward=()=>
  {
    if(tx>-50)
    {
      tx-=25;

    }
    slider.current.style.transform=`translateX(${tx}%)`

  }
  const slideBackward=()=>
    {
      if(tx<0)
        {
          tx+=25;
    
        }
        slider.current.style.transform=`translateX(${tx}%)`
      
    }


  return (
    <div className='testimonials'>
            <img src={nexticon} className="nextimg" onClick={slideForward}></img>
            <img src={backicon} className="backimg" onClick={slideBackward}></img>
            <div className='slider'>
              <ul ref={slider}>
                <li>
                  <div className='slide'>
                    <div className="userinfo">
                    <img src={user1}></img>
                    <div>
                    <h3>Wliisam Jacksom</h3>
                    <spa>Edusity, USA</spa>
                    </div>
                    </div>
                    <p>
                    Edusity offers a unique blend of academic excellence and practical skills development. The campus provides a supportive environment with experienced faculty, state-of-the-art facilities, and a vibrant community that fosters personal and professional growth.
                    </p>
                   

                  </div>
                </li>
                <li>
                  <div className='slide'>
                    <div className="userinfo">
                    <img src={user2}></img>
                    <div>
                    <h3>Navesh Rodrigo</h3>
                    <span>Edusity, England</span>
                    </div>
                    </div>
                  
                    <p>
                    Edusity offers a unique blend of academic excellence and practical skills development. The campus provides a supportive environment with experienced faculty, state-of-the-art facilities, and a vibrant community that fosters personal and professional growth.
                    </p>
                   

                  </div>
                </li>
                <li>
                  <div className='slide'>
                    <div className="userinfo">
                    <img src={user3}></img>
                    <div>
                    <h3>Henry Macullum</h3>
                    <span>Edusity, USA</span>
                    </div>
                    </div>
                    <p>
                    Edusity offers a unique blend of academic excellence and practical skills development. The campus provides a supportive environment with experienced faculty, state-of-the-art facilities, and a vibrant community that fosters personal and professional growth.
                    </p>
                   

                  </div>
                </li>
                <li>
                  <div className='slide'>
                    <div className='userinfo'>
                    <img src={user4}></img>
                    <div>
                    <h3>Kamaj Zorl</h3>
                    <spa>Edusity, Australia</spa>
                    </div>

                    </div>
                  
                    <p>
                    Edusity offers a unique blend of academic excellence and practical skills development. The campus provides a supportive environment with experienced faculty, state-of-the-art facilities, and a vibrant community that fosters personal and professional growth.
                    </p>
                   

                  </div>
                </li>
              </ul>
            </div>
    </div>
  )
}

export default Testimonials