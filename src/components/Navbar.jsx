import React from 'react'
import { useState, useEffect, useRef } from 'react'

import Login from './Login'
import Menubar from './Menubar'


import { Menu } from '@mui/icons-material'
import { AutoStoriesTwoTone } from '@mui/icons-material'
import { SearchRounded } from '@mui/icons-material'
import { FavoriteTwoTone } from '@mui/icons-material'
import { ShoppingCartTwoTone } from '@mui/icons-material'
import { PeopleAltSharp } from '@mui/icons-material'

import './Navbar.scss'

import { Link } from 'react-router-dom'




const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        const handleScroll = () =>{
            setSticky(window.scrollY > 0)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const [btnState, setBtnState] = useState(false);
    
    const handleClick = ()=>{
        setBtnState(btnState =>!btnState)
    }

    let toggleSearch = btnState ? ' active': '';


    const loginRef = useRef();

    const menuRef = useRef();

    

    

    return (
        <div className={`header${sticky ? " stickyNav" : ""}`}>
            <div className="left">
                <div className="brandContainer">
                    <div className="brandLogo">
                        <AutoStoriesTwoTone className='logoIcon' />
                        <Link to=""><li><Menu className='menuIcon' onClick={() => menuRef.current.handleMenu()} /></li></Link>
                        <h1>Wisdom</h1>
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
                        <li><a href="">Home</a></li>
                        <li><a href="">Featured</a></li>
                        <li><a href="">Arrival</a></li>
                        <li><a href="">Offer</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>

                    <div className="icons">
                        <SearchRounded className="icon search" onClick={handleClick} />
                        <Link to=""><li><FavoriteTwoTone className="icon favorite" /></li></Link>
                        <Link to=""><li><ShoppingCartTwoTone className="icon cart" /></li></Link>
                        <Link to=""><li><PeopleAltSharp className="icon user" onClick={() => loginRef.current.handleRender()} /></li></Link>
                        <Login ref={loginRef}/>
                    </div>
                </div>


            </div>
        </div>

        
    )
}

export default Navbar