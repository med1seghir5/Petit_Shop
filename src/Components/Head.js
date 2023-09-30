import {ImFacebook} from 'react-icons/im';
import {FiInstagram} from 'react-icons/fi';
import {FaXTwitter} from 'react-icons/fa6';
import {AiFillYoutube} from 'react-icons/ai';
import React from 'react';


export const Head =()=>{
    return(
        <div id="Head">
                <div className='col-12' id="Social">
                        <a><button className='btn fw-medium'  id='social1'><ImFacebook/> facebook</button></a>
                        <a><button className='btn fw-medium' id='social2'><FiInstagram/> Instagram</button></a>
                        <a><button className='btn fw-medium'  id='social3'><FaXTwitter/> Twitter</button></a>
                        <a><button className='btn fw-medium'  id='social5'><AiFillYoutube/> Youtube</button></a>
                </div>
        </div>
    );
}