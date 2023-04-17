import React from 'react'
import './Footer.scss'
import { data } from '../data/data'
import Slider from '../Slider/Slider'
function Footer() {
  return (
    <div className=''>
  
  <ul className='list'>
    <Slider/>
        {
          data && data.map((item) => (
            <li >
              <div className='item' dangerouslySetInnerHTML={{ __html: item.img }}>

              </div>

              {
                item.name
               }
               <br />
              {
                item.price
               }
            </li>

          ))
        }

      </ul>
      <hr className='hr' />
      <div className="contact">
        <ul className='contact__list'>
          <li>
        <p>
              CONTACT
        </p>
          </li>
          <li>
       <p>
           TERMS OF SERVICES
       </p>
          </li>
          <li>
<p>
            SHIPPING AND RETURNS   </p>      
           </li>
        </ul>
        <p className='contact__item'>
        © 2021 Shelly. Terms of use and privacy policy. 
      
        </p>
   

      <div className="blog">
<p className='blog__item'>
Give an email, get the newsletter.

</p>
<hr className='hr2' />
      </div>
      </div>
    </div>
  )
}

export default Footer