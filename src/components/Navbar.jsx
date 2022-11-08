import React from 'react'
import { useState, useEffect, useRef} from 'react'

import Menubar from './Menubar'

import CartHover from '../components/Cart_Components/CartHover'


import { Menu } from '@mui/icons-material'
import { AutoStoriesTwoTone } from '@mui/icons-material'
import { SearchRounded } from '@mui/icons-material'
import { FavoriteTwoTone } from '@mui/icons-material'
import { ShoppingCartTwoTone } from '@mui/icons-material'
import { PeopleAltSharp } from '@mui/icons-material'

import { ExpandMore } from '@mui/icons-material'

import './Navbar.scss'

import { Link } from 'react-router-dom'

import  UserProfile from '../assets/pic-6.png'
import LoginMenu from './Login_Components/LoginMenu'




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
    const carthoverRef = useRef();

    //usericon toggle dropdown menu function

    const [showLogmenu, setLogmenu] = useState(false)

    //usericon toggle cart hover function

    const [showCart, setshowCart] = useState(false)

    

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
                        <Link to="/"><li>Home</li></Link>
                        <Link to= "/products"><li>all products</li></Link>
                        <Link to="/"><li>Category<ExpandMore className='dropIcon' /></li></Link>
                        <Link to="/"><li>Author<ExpandMore className='dropIcon' /></li></Link>
                        <Link to="/blog"><li>Blog</li></Link>
                    </ul>

                    <div className="icons" >
                        <SearchRounded className="icon search" onClick={handleClick} />
                        <Link to=""><li><FavoriteTwoTone className="icon favorite" /></li></Link>
                        <div onMouseLeave={() => setshowCart(!showCart)} onMouseEnter={() => setshowCart(!showCart)} >
                            <Link to="/cart"><li><ShoppingCartTwoTone className="icon cart"  /></li></Link>
                            {showCart ? <CartHover onMouseLeave={() => setshowCart(!showCart)} /> : null }
                        </div>
                        
                        <div className="counter">01</div>
                        <div className="dropDown" onMouseLeave={() => setLogmenu(!showLogmenu)} onMouseEnter={() => setLogmenu(!showLogmenu)}>
                            <Link to="/login"><li><PeopleAltSharp className="icon user" /></li></Link>
                            {showLogmenu ? <LoginMenu onMouseLeave={() => setLogmenu(!showLogmenu)} /> : null}
                        </div>
                        <img src={UserProfile} className="avater" alt="user profile" />
                    </div>
                </div>


            </div>
        </div>

        
    )
}

export default Navbar