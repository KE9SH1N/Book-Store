import React from 'react'

import './Footer.scss'


import { LocationOn } from '@mui/icons-material'
import { InsertLink } from '@mui/icons-material'
import { Phone } from '@mui/icons-material'
import { Mail } from '@mui/icons-material'

import { Facebook } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { YouTube } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import wordMap from '../assets/worldmap.png'

import { Link } from 'react-router-dom'

import { branches } from '../data'

const Footer = () => {
  return (
    <div className="footerContainer">
        <div className="footerContent">
            <div className="footerLocation">
            <div className="footerlocationHead">
                <h3>Our Branches</h3>
            </div>
            {
                branches.map(branches=>{
                    return(
                        <div className="footerlocationInfo">
                            <li><LocationOn className='footerIcon' /><span>{branches.title}</span></li>
                        </div>
                    )
                })
            }
        </div>
        <div className="footerLinks">
            <div className="footerlinksHead">
                <h3>Quick Links</h3>
            </div>
            <div className="footerlinksList">
                <Link to=""><li><InsertLink className='footerIcon'/><span>Home</span></li></Link>
                <Link to=""><li><InsertLink className='footerIcon' /><span>Featured</span></li></Link>
                <Link to=""><li><InsertLink className='footerIcon' /><span>Arrival</span> </li></Link>
                <Link to=""><li><InsertLink className='footerIcon' /><span>Offer</span> </li></Link>
                <Link to=""><li><InsertLink className='footerIcon' /><span>Blog</span> </li></Link>
                
            </div>
        </div>
            <div className="footerContacts">
                <div className="footercontactsHead">
                    <h3>Contacts Info</h3>
                </div>
                <div className="footercontactsInfo">
                <li><Phone className='footerIcon' /><span>012 123 456 78</span></li>
                <li><Phone className='footerIcon' /><span>032 321 654 98</span></li>
                <li><Mail className='footerIcon' /><span>book.store@gmail.com</span></li>
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