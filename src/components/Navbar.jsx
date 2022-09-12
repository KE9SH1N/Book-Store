import React from 'react'


import { AutoStoriesTwoTone } from '@mui/icons-material'
import { SearchRounded } from '@mui/icons-material'
import { FavoriteTwoTone } from '@mui/icons-material'
import { ShoppingCartTwoTone } from '@mui/icons-material'
import { PeopleAltSharp } from '@mui/icons-material'


import './Navbar.scss'

const Navbar = () => {
    return (
        <div className='header'>
            <div className="left">
                <div className="brandContainer">
                    <a href="#" className="brandLogo">
                        <AutoStoriesTwoTone sx={{ fontSize: 50 }} />
                    </a>
                    <h1 className="brandName">Wisdom</h1>
                </div>
                <div className="searchContainer">
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