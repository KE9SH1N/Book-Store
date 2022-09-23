import React from 'react'
import './Specification.scss'


const Specification = () => {
  return (
    <div className='specificatoinContainer'>
        <div className="tableSection">

            <h3>Specification</h3>
              <table>
                  <tr>
                      <th>Subject</th>
                      <th>Specification</th>
                  </tr>
                  <tr>
                      <td><span>Title</span></td>
                      <td>Maria Anders</td>
                  </tr>
                  <tr>
                      <td><span>Author</span></td>
                      <td>Christina Berglund</td>
                  </tr>
                  <tr>
                      <td><span>published year</span></td>
                      <td>Francisco Chang</td>
                  </tr>
                  <tr>
                      <td><span>publisher</span></td>
                      <td>Roland Mendel</td>
                  </tr>
                  <tr>
                      <td><span>Taged Price</span></td>
                      <td>$150</td>
                  </tr>

              </table>
        </div>
        <div className="reviewSection">
            <h1>review</h1>
        </div>
    </div>
  )
}

export default Specification