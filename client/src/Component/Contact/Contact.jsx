import React from 'react'
import "./Contact.scss"
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Contact = () => {
  return (
    <div className='contact'>
        <div className='wrapper'>
            <span>BE IN TOUCH WITH US</span>
            <div className='email'>
                <input text="text" placeholder='Enter the e-mail....'/>
                <button>Join us</button>
            </div>
            <div className='icons'>
            <GoogleIcon/>
            <TwitterIcon/>
            <InstagramIcon/>
            <YouTubeIcon/>
            </div>
        </div>
    </div>
  )
}

export default Contact