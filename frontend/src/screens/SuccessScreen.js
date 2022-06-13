import React from 'react'
import {Alert, Image} from 'react-bootstrap'


const SuccessScreen = () => {
    return (
    <div class="successcontainer">
         <div class="popup">
            <div class="check">
               <Image src="/images/blue-check.png" className='check-image' />
            </div>
            <div class="success">Smash hit !</div>
         </div>
         <span class="span-1">
            Hey Lads! You're now at the peak point of that alp you've been
            hanging tight for. You've now a clannish part of the Vybes community
            and can avail our services from the following week.
         </span>
      </div>
    )
}

export default SuccessScreen
