import React from 'react'
import './Pagination.scss'

import { Link } from 'react-router-dom';

const Pagination = ({ ItemsperPage, totalItems, paginate }) => {
  const pageNumbers = [];


  for (let i = 1;i<= Math.ceil(totalItems / ItemsperPage); i++){
    pageNumbers.push(i);
  }
  return (
    <div className='paginationContainer'>
      <ul className='paginationContent'>
          {pageNumbers.map(number => {
            return(
              <li key={number} className='pageItem'> 
                <Link to="" onClick={()=> paginate(number)} className='pageLink'>
                  {number}
                </Link>
              </li>
              )
          })}
      </ul>
    </div>
  )
}

export default Pagination