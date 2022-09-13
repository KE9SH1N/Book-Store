import React from 'react'
import { useState } from 'react'

import { AutoStoriesTwoTone } from '@mui/icons-material'
import { SearchRounded } from '@mui/icons-material'
import { FavoriteTwoTone } from '@mui/icons-material'
import { ShoppingCartTwoTone } from '@mui/icons-material'
import { PeopleAltSharp } from '@mui/icons-material'


import './Navbar.scss'
import { useEffect } from 'react'




const Navbar = () => {


    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        const handleScroll = () =>{
            setSticky(window.scrollY > -100)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const [btnState, setBtnState] = useState(false);
    
    const handleClick = ()=>{
        setBtnState(btnState =>!btnState)
    }

    let toggleSearch = btnState ? ' active': '';

    

    return (
        <div className={`header${sticky ? " stickyNav" : ""}`}>
            <div className="left">
                <div className="brandContainer">
                    <a href="#" className="brandLogo">
                        <AutoStoriesTwoTone className='logoIcon' />
                    </a>
                    <h1 className="brandName">Wisdom</h1>
                </div>
                <div className={`searchContainer${toggleSearch}`}>
                    <input type="search" placeholder="Search Here..." />
                    <SearchRounded className="searchIcon" />
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
                        <FavoriteTwoTone className="icon favorite" />
                        <ShoppingCartTwoTone className="icon cart" />
                        <PeopleAltSharp className="icon user" />
                    </div>
                </div>


            </div>
        </div>

        
    )
}

export default Navbar