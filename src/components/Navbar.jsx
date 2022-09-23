import React from 'react'
import { useState, useEffect, useRef} from 'react'

import Menubar from './Menubar'


import { Menu } from '@mui/icons-material'
import { AutoStoriesTwoTone } from '@mui/icons-material'
import { SearchRounded } from '@mui/icons-material'
import { FavoriteTwoTone } from '@mui/icons-material'
import { ShoppingCartTwoTone } from '@mui/icons-material'
import { PeopleAltSharp } from '@mui/icons-material'

import './Navbar.scss'

import { Link } from 'react-router-dom'

import  UserProfile from '../assets/pic-6.png'




const Navbar = () => {

//sticky navabar function

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        const handleScroll = () =>{
            setSticky(window.scrollY > 0)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    });

    //searchbar mobile toggle animation function

    const [btnState, setBtnState] = useState(false);
    
    const handleClick = ()=>{
        setBtnState(btnState =>!btnState)
    }

    let toggleSearch = btnState ? ' active': '';



    //mobile view menubar refarance

    const menuRef = useRef();

    //usericon toggle dropdown menu function

    const [useraccountState, setuseraccountState] = useState(false);
    
    const isShow=()=>{
        setuseraccountState(true);
        console.log(useraccountState)
    }

    const notShow=()=>{
        setuseraccountState(false);
        console.log(useraccountState)
    }

    const handleShow=()=>{
        setuseraccountState(useraccountState=>!useraccountState)
    }

    let toggleshowUser = useraccountState ? ' active': '';

    
    /*const [userState, setuserState] = useState(false);
    const handleUser=()=>{
        setuserState(userState=>!userState)
    }
    let toggleUserState = userState ? ' active': '';*/
    

    return (
        <div className={`header${sticky ? " stickyNav" : ""}`}>
            <div className="left">
                <div className="brandContainer"  >
                    <div className="brandLogo">
                        <AutoStoriesTwoTone className='logoIcon' />
                        <Link to=""><li><Menu className='menuIcon' onClick={() => menuRef.current.handleMenu()} /></li></Link>
                        <Link to="/"><h1>Wisdom</h1></Link>
                        <Menubar ref={menuRef}/>
                    </div>
                    
                </div>
                <div className={`searchContainer${toggleSearch}`}>
                    <input type="search" placeholder="Search Here..." />
                    <SearchRounded className="searchIcon" onClick = {handleClick}/>
                </div>
            </div>

            <div className="right">
                <div className="navbar">
                    <ul className="list">
                        <Link to="/"><li><a href="">Home</a></li></Link>
                        <li><a href="">Featured</a></li>
                        <li><a href="">Arrival</a></li>
                        <li><a href="">Offer</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>

                    <div className="icons" >
                        <SearchRounded className="icon search" onClick={handleClick} />
                        <Link to=""><li><FavoriteTwoTone className="icon favorite" /></li></Link>
                        <Link to=""><li><ShoppingCartTwoTone className="icon cart" /></li></Link>
                        <div className="counter">0</div>
                        <div className="dropDown" onMouseEnter={isShow} onMouseLeave={notShow}>
                            <li><PeopleAltSharp className="icon user" onClick={handleShow}/></li>
                            <div className={`dropdownContent${toggleshowUser}`} onMouseEnter={isShow}>
                                <ul>
                                    <Link to="/login"><li><span>Sign In</span></li></Link>
                                    <Link to="/register"><li><span>Register</span></li></Link>
                                </ul>
                                
                            </div>
                        </div>
                        <img src={UserProfile} className="avater" alt="user profile" />
                    </div>
                </div>


            </div>
        </div>

        
    )
}

export default Navbar