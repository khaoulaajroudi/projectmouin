import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "./carousel";
import { useDispatch } from "react-redux";
import { userLogin, userRegister } from "../JS/userSlice/userSlice";

const Home = () => {
  const [showmodal, setshowmodal] = useState(false);
  const [regitermodal, setregitermodal] = useState(1);
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("token");
  let navigate = useNavigate();
  const [register, setregister] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  return (
    <div>
      <div className="bloc">
        <div className="klem">
          <Link to="/" style={{ color: "#a62609" }}>
            {" "}
            <h3>Home</h3>
          </Link>
          <h3>Music shop experience</h3>
          <h3>Notre magasin de musique</h3>
        </div>

        <div class="theme-popup">
          <input type="radio" name="instruments" id="default" checked="" />
          <input type="radio" name="instruments" id="light" />
          <input type="radio" name="instruments" id="dark" />
          <input type="checkbox" id="checkbox" />
          <label for="checkbox" class="theme-popup__button">
            <span class="theme-popup__icons">
              <svg
                class="default"
                width="40"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
              <svg
                class="sun"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath>
                    <rect width="16" height="16" fill="currentColor"></rect>
                  </clipPath>
                </defs>
              </svg>
              <svg
                class="moon"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                  </span>
                  <span>Piano</span>
                </label>
              </li>
              <li>
                <label for="light">
                  <span class="theme-popup__icons">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <clipPath>
                          <rect
                            width="16"
                            height="16"
                            fill="currentColor"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span>Guitar</span>
                </label>
              </li>
              <li>
                <label for="dark">
                  <span class="theme-popup__icons">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <clipPath>
                          <rect
                            width="14"
                            height="14"
                            fill="currentColor"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span>Drum</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <img
          className="profil"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRErK4Hd-AcDRoRegUIkFiwhqfyuhlD3zzg&usqp=CAU"
          alt="login"
          onClick={() => setshowmodal(!showmodal)}
        />
        <Link to='/panier'><img
          className="panier"
          src="https://static.vecteezy.com/ti/vecteur-libre/p1/4999463-panier-icone-vector-illustration-gratuit-vectoriel.jpg"
          alt="pannier"
        /></Link>
      </div>

      {showmodal? (
        regitermodal==1?(
        <div className="login-form">
          <form className="modalx" onSubmit={(e) => e.preventDefault()}>
            <h3>login</h3>
            <input
              type="text"
              className="boxi"
              placeholder=" entre your email"
              onChange={(e) => setlogin({ ...login, email: e.target.value })}
            ></input>
            <input
              type="password"
              className="boxi"
              placeholder="password"
              onChange={(e) => setlogin({ ...login, password: e.target.value })}
            ></input>
            <input
              type="submit"
              id="btnsubmit"
              className="boxi"
              value="login now"
              onClick={() => {
                dispatch(userLogin(login));
                setTimeout(() => {
                  navigate("/profil");
                }, 1000);
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              }}
            ></input>
             u dont have account <button onClick={()=>setregitermodal(2)}>Register now </button>
          </form>
        </div>
      ) : 
      (
        <div className="login-form">
          <form className="modalx" onSubmit={(e) => e.preventDefault()}>
            <h3>Register</h3>
            <input
              type="text"
              className="boxi"
              placeholder="entre your name"
              onChange={(e) => setregister({ ...register, name: e.target.value })}
            ></input>
            <input
              type="text"
              className="boxi"
              placeholder="entre your lastname"
              onChange={(e) => setregister({ ...register, lastname: e.target.value })}
            ></input>
            <input
              type="text"
              className="boxi"
              placeholder=" entre your email"
              onChange={(e) => setregister({ ...register, email: e.target.value })}
            ></input>
            <input
              type="password"
              className="boxi"
              placeholder="password"
              onChange={(e) => setregister({ ...register, password: e.target.value })}
            ></input>
            <input
              type="submit"
              id="btnsubmit"
              className="boxi"
              value="register"
              onClick={() => {
                dispatch(userRegister(register));
                setTimeout(() => {
                  navigate("/profil");
                }, 1000);
              }}
            ></input>
             u already have account <button onClick={()=>setregitermodal(1)}>Login </button>
          </form>
        </div>
      )):null}

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
      <Carousel />
      <div className="divv">
      <div className="pub" >
      <img  src="https://www.music3000.fr/img/blocklogo/11.jpg" alt="korgg" />
      <img  src="https://www.music3000.fr/img/blocklogo/10.jpg" alt="korgg" />
      <img  src="https://www.music3000.fr/img/blocklogo/13.jpg" alt="korgg" />
      </div></div>
      <div className="blocc" >
      <div className="list">
      <div className="boxx">

      <img  src="https://www.music3000.fr/img/cms/1_1.png"  alt="livr" ></img> 
      <h4> EXPÉDITION SOUS 24H</h4>
      <h5>Pour les produits en stock</h5>

      </div>
      <div className="boxx">

      <img src="https://www.music3000.fr/img/cms/2_1.png"  alt="livr" ></img> 
      <h4> SATISFAIT OU REMBOURSÉ</h4>
      <h5>Retourner les articles qui ne vous conviennent pas</h5>

      </div>
      <div className="boxx">

      <img src="https://www.music3000.fr/img/cms/3_1.png"  alt="livr" ></img> 
      <h4> LIVRAISON GRATUITE</h4>
      <h5>Pour un achat supérieur à 1000DT en Tunisie , Tataouine et gabes</h5>

      </div>
      
      </div>
      </div>
    </div>
  );
};

export default Home;
