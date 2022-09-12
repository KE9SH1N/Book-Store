import React from 'react'

import './Footer.scss'


import { LocationOn } from '@mui/icons-material'
import { Link } from '@mui/icons-material'
import { Phone } from '@mui/icons-material'
import { Mail } from '@mui/icons-material'

import { Facebook } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { YouTube } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'


import wordMap from '../assets/worldmap.png'

const Footer = () => {
  return (
    <div className="footerContainer">
        <div className="footerContent">
            <div className="footerLocation">
            <div className="footerlocationHead">
                <h3>Our Branches</h3>
            </div>
            <div className="footerlocationInfo">
                <li><LocationOn className='footerIcon' /><a href=""> Dhaka</a></li>
                <li><LocationOn className='footerIcon' /><a href="" > Rajshahi</a></li>
                <li><LocationOn className='footerIcon' /><a href="" > Khulna</a></li>
                <li><LocationOn className='footerIcon' /><a href="" > Mymensingh</a></li>
                <li><LocationOn className='footerIcon' /><a href="" > Sylhet</a></li>
                <li><LocationOn className='footerIcon' /><a href="" > Barishal</a></li>
                <li><LocationOn className='footerIcon' /><a href="" > Chattogram</a></li>
                <li><LocationOn className='footerIcon' /><a href="" > Rangpur</a></li>
            </div>
        </div>
        <div className="footerLinks">
            <div className="footerlinksHead">
                <h3>Quick Links</h3>
            </div>
            <div className="footerlinksList">
                <li><Link className='footerIcon' /><a href="">Home</a></li>
                <li><Link className='footerIcon' /><a href="">Featured</a></li>
                <li><Link className='footerIcon' /><a href="">Arrival</a></li>
                <li><Link className='footerIcon' /><a href="">Offer</a></li>
                <li><Link className='footerIcon' /><a href="">Blog</a></li>
                
            </div>
        </div>
            <div className="footerContacts">
                <div className="footercontactsHead">
                    <h3>Contacts Info</h3>
                </div>
                <div className="footercontactsInfo">
                <li><Phone className='footerIcon'/><a href="">012 123 456 78</a></li>
                <li><Phone className='footerIcon'/><a href="">032 321 654 98</a></li>
                <li><Mail className='footerIcon'/><a href="">book.store@gmail.com</a></li>
                <img src={wordMap} alt="" />
                </div>
            </div>
        </div>

        <div className="footerShare">
            <div className="footershareIcons">
                <li><a href=""><Twitter className='shareIcon' /></a></li>
                <li><a href=""><Facebook className='shareIcon' /></a></li>
                <li><a href=""><Instagram className='shareIcon' /></a></li>
                <li><a href=""><YouTube className='shareIcon' /></a></li>    
            </div>
            <div className="footerCredit">
                <h3><span>&copy; kensh1n</span> | all rights reserved!</h3>
            </div>
        </div>
        
        

    </div>
  )
}

export default Footer