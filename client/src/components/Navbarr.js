import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbarr = () => {
    const [showmodal,setshowmodal]=useState(false)
  return (
    <div>
    <div className='bloc'>
    <div className='klem'>

          <Link  to="/"  style={{color:"#a62609"}}  > <h3>Home</h3></Link>
        <h3>Music shop experience</h3>
        <h3>Notre magasin de musique</h3>
        </div>
        
        <div class="theme-popup">
        <input type="radio" name="instruments" id="default" checked=""/>
        <input type="radio" name="instruments" id="light"/>
        <input type="radio" name="instruments" id="dark"/>
        <input type="checkbox" id="checkbox"/>
      <label for="checkbox" class="theme-popup__button">
        <span class="theme-popup__icons">
          <svg class="default" width="40" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          </svg>
          <svg class="sun" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          
            <defs>
              <clipPath>
                <rect width="16" height="16" fill="currentColor"></rect>
              </clipPath>
            </defs>
          </svg>
          <svg class="moon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            
            <defs>
              <clipPath>
                <rect width="14" height="14" fill="currentColor"></rect>
              </clipPath>
            </defs>
          </svg>
        </span>
        Instruments
      </label>
      <div class="theme-popup__list-container">
        <ul class="theme-popup__list">
          <li>
            <label for="default">
              <span class="theme-popup__icons">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                </svg>
              </span>
              <span>
                Piano
              </span>
            </label>
          </li>
          <li>
            <label for="light">
              <span class="theme-popup__icons">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                 
                  <defs>
                    <clipPath>
                      <rect width="16" height="16" fill="currentColor"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>
                Guitar
              </span>
            </label>
          </li>
          <li>
            <label for="dark">
              <span class="theme-popup__icons">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  
                  <defs>
                    <clipPath>
                      <rect width="14" height="14" fill="currentColor"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>
                Drum
              </span>
            </label>
          </li>
        </ul>
      </div>
    </div>
   
      <img className='profil'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRErK4Hd-AcDRoRegUIkFiwhqfyuhlD3zzg&usqp=CAU' alt='login' onClick={()=>setshowmodal(!showmodal)}/>
      <Link to='/panier'> <img    className ='panier' src='https://static.vecteezy.com/ti/vecteur-libre/p1/4999463-panier-icone-vector-illustration-gratuit-vectoriel.jpg' alt='pannier'/></Link>
       
        </div>
        {showmodal ? (
          <div className="loginform">
            <form className="modalx">
              <h3>login</h3>
              <input
                type="text"
                className="boxi"
                placeholder="entre your name"
              ></input>
              <input
                type="text"
                className="boxi"
                placeholder=" entre your email"
              ></input>
              <input
                type="password"
                className="boxi"
                placeholder="password"
              ></input>
              <input
                type="submit"
                id="btnsubmit"
                className="boxi"
                value="login now"
              ></input>
            </form>
          </div>
        ) : null}
  
        <div className="navbarr">
          <img
            className="picture"
            src="https://www.logogenie.fr/download/preview/medium/13195201"
            alt="music-insru logo"
          />
  
          
          
          <input    className="rech" type="text" placeholder='rechreche...' /> 
        
       
          
          
          <div className="boxii" >
           <ul >
            <Link to="/occasion"><li>OCCASION</li></Link>
            <Link to="/mag">
              {" "}
              <li className="mag">MAGASIN</li>{" "}
            </Link>
            <li>SERVICE</li>
            <li>CONTACT</li>
          </ul>
          </div>
        </div>
   
    </div>
  );
}

export default Navbarr;
