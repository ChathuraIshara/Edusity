import React from 'react'
import './contact.css';
import msgicon from '../../assets/msg-icon.png';
import mailicon from '../../assets/mail-icon.png';
import phoneicon from '../../assets/phone-icon.png';
import locationicon from '../../assets/location-icon.png';
import whitearrow from '../../assets/white-arrow.png';

export const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message  <img src={msgicon}></img></h3>
            <p>Feel free to contact us for any inquiries, feedback, or support. Our dedicated team is here to assist you and ensure you have the best experience possible. Whether you have a question, need help with a service, or just want to share your thoughts, don't hesitate to reach out. We value your input and look forward to hearing from you.</p>
            <ul>
                <li><img src={mailicon}></img>Contact@Educity.gmail.com</li>
                <li><img src={phoneicon}></img>+112-673-443</li>
                <li><img src={locationicon}></img>77, GalleRoad, Bambalapitiya, Colombo<br/>Sri lanka</li>
            </ul>

        </div>
        <div className='contact-col'>
            <form>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required></input>
                <label>phone number</label>
                <input type="tel" name="phone" placeholder='Enter your mobile number' required></input>
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message here' required></textarea>
                <button className='btn darkbtn'>Submit now<img src={whitearrow}></img></button>
            </form>

            
        </div>
    </div>
  )
}
